import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Span from 'components/common/Span';
import Title from 'components/common/Title';
import Button from 'components/common/Button';

interface HomeProps {
  className: string;
}

const StyledSpan = styled(Span)`
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  font-size: 1em;
  padding: 0.25em 1em;
  color: #333;
  background: none;
  margin-right: 1.5em;
`;

const NewHomeForm: React.FC<HomeProps> = (props: HomeProps) => {
  const { url } = useRouteMatch();
  return (
    <div className={props.className + ' container'}>
      <div>
        <Title title="전적등록시 주의 할 상황" />
        <ol>
          <li>
            <StyledSpan className="">
              파이썬 랜능크만 전적등록이 가능합니다.{' '}
            </StyledSpan>
            투혼, 헌터 등의 다른 버젼들은 등록하지 않습니다.
          </li>
          <li>
            <StyledSpan className="">1분 능력 모드와 혼돈 모드는 </StyledSpan>
            능력을 적지 않습니다.
            <StyledSpan className=""> 일반 모드</StyledSpan>
            에서만 능력을 적어주세요.
          </li>
          <li>
            <StyledSpan className="">
              현재는 2:2만 등록이 가능합니다.{' '}
            </StyledSpan>
            추후에 1:1 도 등록할 수 있도록 변경할 예정입니다.
          </li>
          <li>
            중복 등록을 최대한 방지하기 위해
            <StyledSpan className=""> 매치를 먼저 등록 </StyledSpan>한 후에야
            게임을 등록할 수 있습니다. 매치에는 최대 판수를 적어주세요.
            <ul>
              <li>
                예: 9판5선승제 라면 '9'판이라는걸 써주세요. 만약 9판 5선승제에서
                11판 6선승제로 바뀌었다면, 수정을 할 수 있습니다.
              </li>
              <li>
                단, 9판 5선승제가 이미 끝나서 기록들이 제출된 상태라면 관리자를
                연락해주세요.
              </li>
            </ul>
          </li>
          <li>
            <StyledSpan className="">
              다른 선수들의 능력을 모르거나 잘못 작성하더라도,{' '}
            </StyledSpan>
            나중에 수정 및 추가가 가능합니다.
          </li>
        </ol>
      </div>
      <NavLink to={`${url}/match`}>
        <StyledButton className="">새로운 매치 등록</StyledButton>
      </NavLink>
      <NavLink to={`${url}/game`}>
        <StyledButton className="">새로운 게임 등록</StyledButton>
      </NavLink>
    </div>
  );
};

export default NewHomeForm;
