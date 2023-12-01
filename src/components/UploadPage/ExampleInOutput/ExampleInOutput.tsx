import React from "react";
import './styles.scss';

interface PFace{
    onChangeInput : (e : React.ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeOutput : (e : React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ExampleInOutput = ({onChangeInput, onChangeOutput} : PFace) => {

    return (
        <div className={"example-input-output-container"}>
            <textarea className={"example-input"} onChange={onChangeInput} placeholder={"프로그램 실행 시 입력되는 값."}/>
            <div className={"arrow-area"}>
                {"-->"}
            </div>
            <textarea className={"example-output"} onChange={onChangeOutput} placeholder={"프로그램 실행 후 출력되는 값."}/>
        </div>
    )
}
export default ExampleInOutput;