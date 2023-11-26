import React, {useState} from "react";
import './style.scss'
import ExampleContainer from "../ExampleContainer/ExampleContainer";

interface exam{
    id : number;
    title : string;
    level : number;
}

const MainpageContainer = () => {
    // 로그인 후 유저 별칭 가져오기
    const [userId, setUserId] = useState<string>("damsoon")

    // 여기서 API Backend Server로 요청을 보내 정보를 얻어야 한다.
    const [currentList, setCurrentList] = useState<exam[]>([
        {id : 2, title : "10부터 1까지 출력하기", level : 0},
        {id : 1, title : "1부터 10까지 출력하기", level : 0},
    ])
    const [levelList, setLevelList] = useState<exam[]>([
        {id : 1, title : "1부터 10까지 출력하기", level : 0},
        {id : 2, title : "10부터 1까지 출력하기", level : 0},
    ])

    return (
        <div className={"main-page"}>
            <div className={"main-header"}>
                <div className={"project-title"}>Data Creature</div>
                <div className={"user-id"}>{userId}</div>
            </div>
            <hr/>
            <ExampleContainer currentList={currentList} levelList={levelList}/>
        </div>
    )
}
export default MainpageContainer;