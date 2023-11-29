import React from "react";
import './styles.scss';

interface PFace{
    onClickRunButton : () => void;
}

const RunArea = ({onClickRunButton} : PFace) => {

    return (
        <div className={"result-button-container"}>
            <div className={"result-title"}>
                Result
            </div>
            <button onClick={onClickRunButton}>Run!!</button>
        </div>
    )
}
export default RunArea;