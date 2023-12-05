import React, {useCallback, useEffect, useState} from "react";
import "./style.scss"
import SolvePageExamDetail from "../SolvePageExamDetail/SolvePageExamDetail";
import SolvePageInputCode from "../SolvePageInputCode/SolvePageInputCode";
import RunArea from "../RunArea/RunArea";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";

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
        'class Solution {\n' +
        '       public void main(String s) {\n' +
        '               return s;\n' +
        '       }\n' +
        '}')

    //SolvePageInputCode에 넘길 함수.
    const onChangeCode = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(e.target.value);
        e.preventDefault();
    }, []);

    // RunArea에 넘길 함수. -- "RUN!' 버튼 클릭 시 구동
    const onClickRunButton = useCallback(async () => {
        const response = await axios.post('http://localhost:4000/docker/execute-code', code);

        console.log(response.data);

        // axios.get(code)
        // 받아온 결과값 setState화 해야한다.
        // 밑에 "2개 중 1개 성공" 과 같은 문장이 나오도록 설정.
    }, [code])


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
        </div>
    )
}
export default SolvePageContainer;