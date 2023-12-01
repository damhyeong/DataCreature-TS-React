import React, {useCallback, useRef, useState} from "react";
import './styles.scss'
import LevelSelector from "../LevelSelector/LevelSelector";
import ExampleInOutput from "../ExampleInOutput/ExampleInOutput";

interface PIFace{
    titleRef : React.MutableRefObject<string>;
    levelRef : React.MutableRefObject<number>;
    introduceRef : React.MutableRefObject<string>;
    constraintsRef : React.MutableRefObject<string>;
    examInputRef : React.MutableRefObject<string>;
    examOutputRef : React.MutableRefObject<string>;
}

const UploadInfoContainer =
    ({titleRef, levelRef, introduceRef, constraintsRef, examInputRef, examOutputRef} : PIFace) => {


    const onChangeTitle = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        titleRef.current = e.target.value;
    }, [titleRef]);
    const onClickLevel = useCallback((id : number) => {
        levelRef.current = id;
    }, [levelRef]);
    const onChangeIntroduce = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        introduceRef.current = e.target.value
    }, [introduceRef])
    const onChangeConstraints = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        constraintsRef.current = e.target.value;
    }, [constraintsRef])
    const onChangeInput = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        examInputRef.current = e.target.value;
    }, [examInputRef]);
    const onChangeOutput = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        examOutputRef.current= e.target.value;
    }, [examOutputRef]);

    return (
        <div className={"upload-info-container"}>
            <div className={"title-container"}>
                <div className={"indicate-title"}>제목 : </div>
                <input className={"input-title"} value={titleRef.current} onChange={onChangeTitle} placeholder={"문제 제목을 입력하세요."}/>
            </div>
            <hr/>
            <div className={"indicate"}>Level</div>
            <div className={"select-level"}>
                <LevelSelector onClickLevel={onClickLevel} level={levelRef.current}/>
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