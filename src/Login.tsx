// Login.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 2rem;
`;

const LoginBox = styled.div`
  width: 400px;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #a3a3a3;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 로그인 로직 구현...
        console.log(username, password);
    };

    return (
        <Container>
            <LoginBox>
                <Title>로그인</Title>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="이메일 주소"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">로그인</Button>
                </form>
            </LoginBox>
        </Container>
    );
};

export default Login;
