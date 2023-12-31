import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import ExampleContainer from "./components/MainPage/ExampleContainer/ExampleContainer";
import MainpageContainer from "./components/MainPage/MainpageContainer/MainpageContainer";
import SolvePageContainer from "./components/SolvePage/SolvePageContainer/SolvePageContainer";
import MainRoutes from "./components/MainRoutes";
import UploadMainPage from "./components/UploadPage/UploadMainPage/UploadMainPage";
import LoginPage from "./components/AuthPage/LoginPage/LoginPage";

function App() {
    return (
        <MainRoutes/>
    );
}

export default App;
