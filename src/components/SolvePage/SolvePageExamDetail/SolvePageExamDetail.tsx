import React from "react";
import './styles.scss';
import InputOutputTables from "../InputOutputTables/InputOutputTables";

interface PFace{
    title : string | undefined;
    introduce : string;
    constraints : string;
    input : string;
    output : string;
}

const SolvePageExamDetail = ({title, introduce, constraints, input, output} : PFace) => {
    return (
        <div className={"container"}>
            <div className={"example-title"}>{title}</div>
            <hr/>
            <div className={"example-container"}>
                <div className={"title"}>문제 설명</div>
                <div className={"example-introduce"} >{introduce}</div>
                <div className={"title"}>제한 조건</div>
                <div className={"example-constraints"}>{constraints}</div>
                <div className={"title"}>입출력 예</div>
                <div className={"example-input-output"}>
                    <InputOutputTables input={input} output={output}/>
                </div>
            </div>
        </div>
    )
}
export default SolvePageExamDetail;