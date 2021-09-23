import Title from 'components/common/Title';
import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  margin-right: 30px;
`;

const PlayerInput: React.FC = (props) => {
  return (
    <div>
      <Label>선수</Label>
      <input type="text" /> <br />
      <Label>종족</Label>
      <select>
        <option>Z</option>
        <option>T</option>
        <option>P</option>
      </select>{' '}
      <br />
      <Label>위치</Label>
      <select>
        <option>3</option>
        <option>6</option>
        <option>9</option>
        <option>12</option>
      </select>{' '}
      <br />
      <Label>능력</Label>
      <input type="text" />
    </div>
  );
};

const TeamInput: React.FC = (props) => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <PlayerInput />
      <PlayerInput />
    </section>
  );
};

const NewGameForm: React.FC = () => {
  const [mode, setMode] = useState('normal');

  const handleChangeMode = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(ev.target.value);
  };

  return (
    <div>
      <Title>게임 추가</Title>
      <form>
        <div>
          <Label>모드</Label>
          <select onChange={handleChangeMode} value={mode}>
            <option value="normal">일반</option>
            <option value="chaos">혼돈</option>
            <option value="one">1분능력</option>
          </select>
        </div>
        <section style={{ display: 'flex' }}>
          <TeamInput />
          <TeamInput />
        </section>
        <label>승자</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <input type="submit" value="게임 등록" />
      </form>
    </div>
  );
};

export default NewGameForm;
