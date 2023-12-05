import React, {useCallback, useState} from "react";
import './styles.scss';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onClickLogin = useCallback(async (e : React.MouseEvent<HTMLButtonElement>) => {

    }, []);
}
export default LoginPage;