import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainpageContainer from "./MainPage/MainpageContainer/MainpageContainer";
import SolvePageContainer from "./SolvePage/SolvePageContainer/SolvePageContainer";

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/mainPage"} element={<MainpageContainer/>}/>
                <Route path={"/solvePage/:examId/:title/:level/:nickname"} element={<SolvePageContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}
// examId, title, level, nickname

export default MainRoutes;