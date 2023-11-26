import React from "react";
import "./style.scss"
import ExampleListItem from "../ExampleListItem/ExampleListItem";

const ExampleList = () => {


    return (
        <div className={"container"}>
            <div className={"title-container"}>
                <div className={"id-title"}>ID</div>
                <div className={"title-title"}>문제 제목</div>
                <div className={"level-title"}>난이도</div>
            </div>


            <div className={"exam-container"}>
                <ExampleListItem id={1} title={"10부터 1까지 출력하기"} level={0}/>
            </div>
        </div>
    )
}
export default ExampleList;