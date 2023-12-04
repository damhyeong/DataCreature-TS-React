import React, {useCallback, useRef, useState} from "react";
import './styles.scss'
import LevelSelector from "../LevelSelector/LevelSelector";
import ExampleInOutput from "../ExampleInOutput/ExampleInOutput";

interface PIFace{
    title : string;
    setTitle : React.Dispatch<React.SetStateAction<string>>;
    level : number;
    setLevel : React.Dispatch<React.SetStateAction<number>>;
    introduce : string;
    setIntroduce : React.Dispatch<React.SetStateAction<string>>;
    constraints : string;
    setConstraints : React.Dispatch<React.SetStateAction<string>>;
    examInput : string;
    setExamInput : React.Dispatch<React.SetStateAction<string>>;
    examOutput : string;
    setExamOutput : React.Dispatch<React.SetStateAction<string>>;
}

const UploadInfoContainer =
    ({title, setTitle, level, setLevel, introduce, setIntroduce, constraints, setConstraints, examInput, setExamInput, examOutput, setExamOutput} : PIFace) => {



    const onChangeTitle = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, [setTitle]);
    const onClickLevel = useCallback((id : number) => {
        setLevel(id);
    }, [setLevel]);
    const onChangeIntroduce = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setIntroduce(e.target.value);
    }, [setIntroduce])
    const onChangeConstraints = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setConstraints(e.target.value);
    }, [setConstraints])
    const onChangeInput = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setExamInput(e.target.value);
    }, [setExamInput]);
    const onChangeOutput = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setExamOutput(e.target.value);
    }, [setExamOutput]);

    return (
        <div className={"upload-info-container"}>
            <div className={"title-container"}>
                <div className={"indicate-title"}>제목 : </div>
                <input className={"input-title"} value={title} onChange={onChangeTitle} placeholder={"문제 제목을 입력하세요."}/>
            </div>
            <hr/>
            <div className={"indicate"}>Level</div>
            <div className={"select-level"}>
                <LevelSelector onClickLevel={onClickLevel} level={level}/>
            </div>
            <hr/>
            <div className={"indicate"}>문제 설명</div>
            <div className={"insert-introduce"}>
                <textarea placeholder={"문제에 대해 설명 해 주세요."} onChange={onChangeIntroduce}/>
            </div>
            <hr/>
            <div className={"indicate"}>제한 조건</div>
            <div className={"insert-constraints"}>
                <textarea placeholder={"해당 문제의 변수 크기에 대해서 쓰거나, 힌트를 조셔도 됩니다."} onChange={onChangeConstraints}/>
            </div>
            <hr/>
            <div className={"indicate"}>입출력 예시</div>
            <div className={"example-in-output"}>
                <ExampleInOutput onChangeInput={onChangeInput} onChangeOutput={onChangeOutput}/>
            </div>
        </div>
    )
}
export default UploadInfoContainer;