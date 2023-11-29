import React from "react";
import './styles.scss';

interface PFace{
    code : string;
    onChangeCode : (e : React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const SolvePageInputCode = ({code, onChangeCode} : PFace) => {

    return (
        <div className={"code-container"}>
            <hr/>
            <div className={"class-title"}>
                Solution.java
            </div>
            <hr/>
            <div className={"input-container"}>
                <textarea value={code} onChange={onChangeCode}/>
            </div>
            <hr/>
        </div>
    )

}
export default SolvePageInputCode;