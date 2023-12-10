import React, {useCallback, useState} from "react";
import './styles.scss';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import './styles.scss'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onChangeEmail = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);
    const onChangePassword = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const onClickLogin = useCallback(async (e : React.MouseEvent<HTMLButtonElement>) => {
        console.log("email : " + email);
        console.log("password : " + password);

        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:4000/api/v1/auth/login", {
                email : email,
                password : password
            })
            console.log("인증에 성공했습니다!!!!!!!");
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
            // history.push('/mainPage');
            navigate('/mainPage');
        } catch (error) {
            console.log('로그인에 실패하였습니다.');
        }
    }, [email, password, navigate]);

    return (
        <div className={"login-page-container"}>
            <input type={"email"} value={email} onChange={onChangeEmail}/>
            <input type={"password"} value={password} onChange={onChangePassword}/>
            <button value={"send"} onClick={onClickLogin}>login</button>
        </div>
    )
}
export default LoginPage;