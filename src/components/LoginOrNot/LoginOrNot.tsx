import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const LoginOrNot = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        if(token){
            navigate('/mainPage');
        } else {
            navigate('/login');
        }
    }, [navigate, token]);

    return (
        <div>
            확인중...
        </div>
    )
}
export default LoginOrNot;