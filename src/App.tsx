import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import ExampleContainer from "./components/MainPage/ExampleContainer/ExampleContainer";
import MainpageContainer from "./components/MainPage/MainpageContainer/MainpageContainer";
import SolvePageContainer from "./components/SolvePage/SolvePageContainer/SolvePageContainer";

function App() {
    return (
        <SolvePageContainer examId={1} title={"JadenCase 문자열 만들기"} level={3}/>
    );
}

export default App;
