import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { isValid } from 'utils/validate';

interface RegistrationInfo {
  username: string;
  email: string;
  password: string;
  nickname: string;
  confirm: string;
  agreement: boolean;
}

const RegistrationForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState<RegistrationInfo>({
    username: '',
    email: '',
    password: '',
    confirm: '',
    nickname: '',
    agreement: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isValid(name, value)) {
      setUserInfo({ ...userInfo, [name]: value });
      console.log('ok');
    } else {
      // set error message
      console.log('invalid');
    }
  };

  return (
    <div>
      <form>
        <label>아이디</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>비밀번호</label>
        <input type="password" name="password" />
        <label>비밀번호 확인</label>
        <input type="password" name="confirm" />
        <label>이메일</label>
        <input type="email" name="email" />
        <label>닉네임</label>
        <input type="text" name="nickname" />
        <div>RandomStar는 무분별한 정보 등록을 방지하기 위해 .</div>
        <input type="checkbox" name="agreement" />
        <input type="submit" value="회원 가입" />
      </form>
      <Link to="/login">로그인</Link>
    </div>
  );
};

export default RegistrationForm;
