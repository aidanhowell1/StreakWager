import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  const handleLogin = (token: string) => {
    localStorage.setItem('authToken', token);
    window.location.href = '/dashboard'; // or use react-router
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;