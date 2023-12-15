import React, {useCallback, useEffect, useState} from "react";
import "./style.scss"
import SolvePageExamDetail from "../SolvePageExamDetail/SolvePageExamDetail";
import SolvePageInputCode from "../SolvePageInputCode/SolvePageInputCode";
import RunArea from "../RunArea/RunArea";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import OpenAI from "openai";
import * as process from "process";

interface ParamIFace{
    examId : string | undefined;
    title : string | undefined;
    level : string | undefined;
    nickname : string | undefined;
}

interface RunResult{
    runResult : boolean;
    reason : string;
}

const SolvePageContainer = () => {
    // {examId, title, level, nickname} : ParamIFace
    const location = useLocation();
    const [gptAnswer, setGptAnswer] = useState('');
    const [secretKey, setSecretKey] = useState('Insert Your GPT API-KEY')
    const [resultText, setResultText] = useState<string>('');

    // Function to parse the query parameters
    const getQueryParams = (query: string): ParamIFace => {
        const params = new URLSearchParams(query);
        return {
            examId: params.get('examId') || '',
            title: params.get('title') || '',
            level: params.get('level') || '',
            nickname: params.get('nickname') || ''
        };
    };

    // Get the current query parameters
    const queryParams = getQueryParams(location.search);




    // API에서 데이터를 가져오기 위한 상태
    const [detailData, setDetailData] = useState({
        examNumber: 0,
        introduce: '',
        examConstraints: '',
        examInput: '',
        examOutput: ''
    });

    // 문제 상세 정보를 불러오는 함수
    const fetchDetailData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/examples/${queryParams.examId}`, {
                /*
                params: {
                    examId: queryParams.examId
                }
                */

            });
            setDetailData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("문제 상세 정보를 가져오는 중 오류 발생", error);
        }
    };

    // 컴포넌트가 마운트될 때 API 호출
    useEffect(() => {
        fetchDetailData();
    }, [queryParams.examId]); // examId가 변경될 때마다 호출

    // SolvePageInputCode에 넘길 State
    const [code, setCode] = useState<string>(
        'import java.util.*;\n' +
        '\n' +
        'public class Test {\n' +
        '       public static void main(String[] args) {\n' +
        '               System.out.println("");\n' +
        '       }\n' +
        '}')

    //SolvePageInputCode에 넘길 함수.
    const onChangeCode = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(e.target.value);
        e.preventDefault();
    }, []);

    /*const openAiApiCall = async (userCode : string) => {
        const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", { // 모델명을 'davinci-codex'로 변경
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${secretKey}`
            },
            body: JSON.stringify({
                prompt: `주어진 코드에 "입력" 값을 입력하고, 실행 후 "출력" 값과 동일한지 판단하고, 맞다면 "축하합니다! 맞았습니다!" 를 반환하고, 틀렸다면 "문제"를 기반으로 "입력" 값에 알맞는 "출력" 값이 나오도록 코드를 수정해서 반환해줘. \n\n코드:\n${userCode}\n\n입력:\n${detailData.examInput}\n\n출력:\n${detailData.examOutput}\n\n판단:`,
                max_tokens: 150
            })
        });

        const data = await response.json();
        return data.choices[0].text;
    };*/

    const openai = new OpenAI({apiKey : secretKey, dangerouslyAllowBrowser : true});

    const executeUserCode = async (code : string) => {
            console.log("userCode : ");
            const content = `input : ${detailData.examInput}, output : ${detailData.examOutput}, introduce : ${detailData.introduce}, code : \n ${code}`;
            console.log(content);
            const assistant = await openai.beta.assistants.create(
                {
                    name : "Code Helper",
                    instructions : "주어진 코드에 \"input\" 값을 입력하고, 실행 후 \"output\" 값과 동일한지 판단하고, 맞다면 \"축하합니다! 맞았습니다!\" 를 반환하고, 틀렸다면 \"introduce\"를 기반으로 \"input\" 값에 알맞는 \"output\" 값이 나오도록 코드를 수정해서 반환해줘.",
                    tools : [{type : "code_interpreter"}],
                    model : "gpt-4-1106-preview"
                }
            )
            const thread = await openai.beta.threads.create();
            const message = await openai.beta.threads.messages.create(
                thread.id,
                {
                    role : "user",
                    content : content
                }
            )
        console.log(message);

        const run = await openai.beta.threads.runs.create(
            thread.id,
            {
                assistant_id: assistant.id,
                instructions: "없음."
            }
        );

        console.log(run);
    }

    /*const onClickRunButton = useCallback(async () => {
        // ... 기존 코드 ...
        // await executeUserCode(code);
        axios.get("http://localhost:4000/code-execute/test-run-code");
        /!*try {
            const result = await openAiApiCall(code);
            console.log(result);
            // 여기에 결과를 UI에 표시하는 로직을 추가
            setGptAnswer(result);
        } catch (e) {
            console.log("Error : " + e);
        }*!/
    }, [code, executeUserCode]);*/

    const onClickRunButton = useCallback(async () => {
        // ... 기존 코드 ...
        // await executeUserCode(code);
        const result = await axios.post("http://localhost:4000/code-execute/test-run-code", {
            userCode : code,
            input : detailData.examInput,
            output : detailData.examOutput
        });
        const resultData : RunResult = result.data;
        if(resultData.runResult){
            setResultText('성공했습미다.');
        }else{
            setResultText('실패했습니다.');
        }

    }, [code, executeUserCode]);


    // RunArea에 넘길 함수. -- "RUN!' 버튼 클릭 시 구동
    /*const onClickRunButton = useCallback(async () => {
        const token = localStorage.getItem('token');
        const userCode = {
            userCode : code
        }
        try{
            const response = await axios.post('http://localhost:4000/docker/execute-code', userCode, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }).then(response => console.log(response));
        } catch (e) {
            console.log("Error : " + e);
        }

        // axios.get(code)
        // 받아온 결과값 setState화 해야한다.
        // 밑에 "2개 중 1개 성공" 과 같은 문장이 나오도록 설정.
    }, [code])*/


    return (
        <div className={"solve-main-page"}>
            <div className={"header"}>
                <div className={"project-title"}>Data Creature</div>
                <div className={"user-id"}>{queryParams.nickname}</div>
            </div>
            <div className={"level-and-id"}>
                <div className={"level"}>Level : {queryParams.level}</div>
                <div className={"id"}>ID : {queryParams.examId}</div>
            </div>
            <div className={"computing-constraints"}>
                <div className={"constraints-title"}>
                    <div className={"time-constraints"}>시간 제한</div>
                    <div className={"memory-constraints"}>메모리 제한</div>
                </div>
                <hr/>
                <div className={"constraints-detail"}>
                    <div className={"time-constraints"}>10 초</div>
                    <div className={"memory-constraints"}>1024 MB</div>
                </div>
            </div>
            <SolvePageExamDetail
                title={queryParams.title}
                introduce={detailData.introduce}
                constraints={detailData.examConstraints}
                input={detailData.examInput}
                output={detailData.examOutput}
            />
            <SolvePageInputCode code={code} onChangeCode={onChangeCode}/>
            <div className={"run-area"}>
                <RunArea onClickRunButton={onClickRunButton}/>
            </div>
            <div>
                {resultText}<br/>
                <div>
                    {gptAnswer}
                </div>
            </div>
        </div>
    )
}
export default SolvePageContainer;