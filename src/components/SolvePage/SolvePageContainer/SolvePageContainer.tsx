import React, {useState} from "react";
import "./style.scss"

interface ParamIFace{
    examId : number;
    title : string;
    level : number;
}

const SolvePageContainer = ({examId, title, level} : ParamIFace) => {
    /*
    추후 이 영역에 문제 상세 정보에 대해서 가져와야 한다. (Database -> Backend -> Frontend)
    axios 사용하기
     */
    const [exampleData, setExampleData] = useState();

    return (
        <div className={"solve-main-page"}>
            <div className={"header"}>
                <div className={"project-title"}>Data Creature</div>
                <div className={"user-id"}>담순쨩</div>
            </div>

        </div>
    )
}
export default SolvePageContainer;