import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainpageContainer from "./MainPage/MainpageContainer/MainpageContainer";
import SolvePageContainer from "./SolvePage/SolvePageContainer/SolvePageContainer";
import LoginPage from "./AuthPage/LoginPage/LoginPage";
import LoginOrNot from "./LoginOrNot/LoginOrNot";

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LoginOrNot/>}/>
                <Route path={"/login"} element={<LoginPage/>} />
                <Route path={"/mainPage"} element={<MainpageContainer/>}/>
                <Route path={"/solvePage/*"} element={<SolvePageContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}
// examId, title, level, nickname

export default MainRoutes;