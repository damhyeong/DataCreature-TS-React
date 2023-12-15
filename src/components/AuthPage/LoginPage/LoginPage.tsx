import React, {useCallback, useState} from "react";
import './styles.scss';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import './styles.scss'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [titleCss, setTitleCss] = useState<string>('project-title');
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
            navigate('/');
        } catch (error) {
            console.log('로그인에 실패하였습니다.');
            alert("Failed to Login.");
        }
    }, [email, password, navigate]);

    return (
        <div className={"login-page-container"}>
            <div className={"login-container"}>
                <div className={"project-title"}>
                    Data Creature
                </div>
                <input className={"email"} type={"email"} value={email} onChange={onChangeEmail} placeholder={"Email을 입력하세요."}/>
                <input className={"password"} type={"password"} value={password} onChange={onChangePassword} placeholder={"Password를 입력하세요."}/>
                <button value={"send"} onClick={onClickLogin}>login</button>
            </div>
        </div>
    )
}
export default LoginPage;