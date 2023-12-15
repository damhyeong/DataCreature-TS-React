import React, {useEffect, useState} from "react";
import './style.scss'
import ExampleContainer from "../ExampleContainer/ExampleContainer";
import axios from "axios";

interface exam{
    exampleNumber : number;
    title : string;
    level : number;
}

const MainpageContainer = () => {
    // 로그인 후 유저 별칭 가져오기
    const [userId, setUserId] = useState<string>("damsoon")

    // 여기서 API Backend Server로 요청을 보내 정보를 얻어야 한다.
    const [currentList, setCurrentList] = useState<exam[]>([
        {exampleNumber : 2, title : "10부터 1까지 출력하기", level : 0},
        {exampleNumber : 1, title : "1부터 10까지 출력하기", level : 0},
    ])
    const [levelList, setLevelList] = useState<exam[]>([
        {exampleNumber : 1, title : "1부터 10까지 출력하기", level : 0},
        {exampleNumber : 2, title : "10부터 1까지 출력하기", level : 0},
    ])

    const fetchDetailData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:4000/api/examples/currentList`, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }).then(response => setCurrentList(response.data));
            // const response = await axios.get(`http://localhost:4000/api/examples/currentList`);
            // setCurrentList(response.data);
            console.log('response.data');
            // console.log(response);
        } catch (error) {
            console.error("문제 상세 정보를 가져오는 중 오류 발생", error);
            console.log(error);
        }
    };

    // 컴포넌트가 마운트될 때 API 호출
    useEffect(() => {
        fetchDetailData();

    }, []); // examId가 변경될 때마다 호출


    return (
        <div className={"main-page-container"}>
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