import React, {useState} from "react";
import "./style.scss"
import SolvePageExamDetail from "../SolvePageExamDetail/SolvePageExamDetail";

interface ParamIFace{
    examId : number;
    title : string;
    level : number;
    nickname : string;
}

const SolvePageContainer = ({examId, title, level, nickname} : ParamIFace) => {
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

    const {exam_number, introduce, exam_constraints, exam_input, exam_output} = sampleDetailData;



    return (
        <div className={"solve-main-page"}>
            <div className={"header"}>
                <div className={"project-title"}>Data Creature</div>
                <div className={"user-id"}>{nickname}</div>
            </div>
            <div className={"level-and-id"}>
                <div className={"level"}>Level : {level}</div>
                <div className={"id"}>ID : {examId}</div>
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
                title={title}
                introduce={introduce}
                constraints={exam_constraints}
                input={exam_input}
                output={exam_output}
            />
        </div>
    )
}
export default SolvePageContainer;