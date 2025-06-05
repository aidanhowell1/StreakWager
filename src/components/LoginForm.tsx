import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
`;

const Form = styled.form`
  padding: 2.5rem 2rem;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(44, 62, 80, 0.08);
  display: flex;
  flex-direction: column;
  min-width: 340px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #27408b;
`;

const Input = styled.input`
  padding: 0.9rem;
  margin-bottom: 1.1rem;
  border: 1.5px solid #ececec;
  border-radius: 7px;
  font-size: 1rem;
  transition: border 0.2s;

  &:focus {
    border-color: #a1c4fd;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.9rem;
  background: linear-gradient(120deg, #27408b 0%, #8fd3f4 100%);
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: linear-gradient(120deg, #8fd3f4 0%, #27408b 100%);
  }
`;

const ErrorMsg = styled.div`
  color: #c0392b;
  margin-bottom: 1rem;
  text-align: center;
`;

interface Props {
  onLogin: (token: string) => void;
}

const LoginForm: React.FC<Props> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError('Invalid email or password');
      return;
    }

    const data = await res.json();
    onLogin(data.token);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;