import React, {useEffect, useState} from "react";
import './style.scss'
import ExampleList from "../ExampleList/ExampleList";

interface exam{
    exampleNumber : number;
    title : string;
    level : number;
}

interface PIFace{
    currentList : exam[];
    levelList : exam[];
}

const ExampleContainer = ({currentList, levelList} : PIFace) => {

    const [currentExamList , setCurrentExamList] = useState<exam[]>(
        currentList
    );

    const [levelExamList, setLevelExamList] = useState<exam[]>(
        levelList
    )

    useEffect(() => {
        setCurrentExamList(currentList);
        setLevelExamList(levelList);
    }, [currentList, levelList]);

    return (
        <div className={"example-container"}>
            <div className={"example-current"}>
                <div className={"title-current"}>최신 문제</div>
                <ExampleList examList={currentExamList}/>
            </div>
            <div className={"example-level"}>
                <div className={"title-level"}>레벨 별 문제</div>
                <ExampleList examList={levelExamList}/>
            </div>
        </div>
    )
}
export default ExampleContainer;