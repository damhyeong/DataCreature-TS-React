import React, {useCallback, useRef, useState} from "react";
import './styles.scss'
import LevelSelector from "../LevelSelector/LevelSelector";
import ExampleInOutput from "../ExampleInOutput/ExampleInOutput";

const UploadInfoContainer = () => {
    const [title, setTitle] = useState<string>('');
    const [level, setLevel] = useState<number>(0);
    const [introduce, setIntroduce] = useState<string>('');
    const [constraints, setConstraints] = useState<string>('');
    const [examInput, setExamInput] = useState<string>('');
    const [examOutput, setExamOutput] = useState<string>('');

    const onChangeTitle = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, []);
    const onClickLevel = useCallback((id : number) => {
        setLevel(id);
    }, []);
    const onChangeIntroduce = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setIntroduce(e.target.value);
    }, [])
    const onChangeConstraints = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setConstraints(e.target.value);
    }, [])
    const onChangeInput = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setExamInput(e.target.value);
    }, []);
    const onChangeOutput = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setExamOutput(e.target.value);
    }, []);

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