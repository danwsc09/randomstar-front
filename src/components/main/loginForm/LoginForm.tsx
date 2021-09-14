import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface UserCredentials {
  username: string;
  password: string;
}

type field = 'username' | 'password';

const LoginForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserCredentials>({
    username: '',
    password: '',
  });

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        // TODO: validate username
        // if okay:
        setUserInfo({ ...userInfo, [name]: value });
        break;
      case 'password':
        // TODO: validate password
        // if okay:
        setUserInfo({ ...userInfo, [name]: value });
        break;
      default:
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: request to server
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>아이디</label>
        <input
          type="text"
          name="username"
          value={userInfo.username}
          onChange={handleUserChange}
          required
        />
        <label>비밀번호</label>
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleUserChange}
          required
        />
        <input type="submit" value="로그인" />
      </form>
      <Link to="/register">회원가입</Link>
    </div>
  );
};

export default LoginForm;
