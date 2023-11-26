import React from "react";
import "./style.scss"
import ExampleListItem from "../ExampleListItem/ExampleListItem";

interface EIFace{
    id : number;
    title : string;
    level : number;
}

// Example List Interface
interface ELIface {
    examList : EIFace[];
}

const ExampleCurrentList = (props : ELIface) => {

    const {examList} = props;

    return (
        <div className={"container"}>
            <div className={"title-container"}>
                <div className={"id-title"}>ID</div>
                <div className={"title-title"}>문제 제목</div>
                <div className={"level-title"}>난이도</div>
            </div>


            <div className={"exam-container"}>
                {examList.map(
                    (exam : EIFace) => <ExampleListItem id={exam.id} title={exam.title} level={exam.level}/>
                )}

            </div>
        </div>
    )
}
export default ExampleCurrentList;