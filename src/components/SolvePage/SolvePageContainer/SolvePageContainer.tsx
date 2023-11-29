import React, {useCallback, useState} from "react";
import "./style.scss"
import SolvePageExamDetail from "../SolvePageExamDetail/SolvePageExamDetail";
import SolvePageInputCode from "../SolvePageInputCode/SolvePageInputCode";
import RunArea from "../RunArea/RunArea";
import {useLocation, useParams} from "react-router-dom";

interface ParamIFace{
    examId : string | undefined;
    title : string | undefined;
    level : string | undefined;
    nickname : string | undefined;
}

const SolvePageContainer = () => {
    // {examId, title, level, nickname} : ParamIFace
    const location = useLocation();

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
    const queryParams = getQueryParams(location.search)

    /*
    추후 이 영역에 문제 상세 정보에 대해서 가져와야 한다. (Database -> Backend -> Frontend)
    axios 사용하기
    private int exam_number;
    private String introduce;
    private String exam_constraints;
    private String exam_input;
    private String exam_output;
     */
    const sampleDetailData = {
        exam_number : 3,
        introduce : "JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.\n단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다.",
        exam_constraints : "* 'input'은 길이 1 이상 200 이하인 문자열입니다.\n* 'input'은 알파벳과 숫자, 공백문자(' ')로 이루어져 있습니다.\n* 숫자는 단어의 첫 문자로만 나옵니다.\n* 숫자로만 이루어진 단어는 없습니다.",
        exam_input : "3people unFollwed me",
        exam_output : "3people Unfollwed Me",
    }

    // 문제 상세 정보를 데이터베이스에서 받아온다면 딱 이 모양.
    const {exam_number, introduce, exam_constraints, exam_input, exam_output} = sampleDetailData;

    // SolvePageInputCode에 넘길 State
    const [code, setCode] = useState<string>(
        'import java.util.*;\n' +
        '\n' +
        'class Solution {\n' +
        '       public String solution(String s) {\n' +
        '               return s;\n' +
        '       }\n' +
        '}')

    //SolvePageInputCode에 넘길 함수.
    const onChangeCode = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(e.target.value);
        e.preventDefault();
    }, []);

    //RunArea에 넘길 함수. -- "RUN!' 버튼 클릭 시 구동
    const onClickRunButton = useCallback(() => {
        const codeRequest = code;
        // axios.get(code)
        // 받아온 결과값 setState화 해야한다.
        // 밑에 "2개 중 1개 성공" 과 같은 문장이 나오도록 설정.
    }, [])

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
                introduce={introduce}
                constraints={exam_constraints}
                input={exam_input}
                output={exam_output}
            />
            <SolvePageInputCode code={code} onChangeCode={onChangeCode}/>
            <div className={"run-area"}>
                <RunArea onClickRunButton={onClickRunButton}/>
            </div>
        </div>
    )
}
export default SolvePageContainer;