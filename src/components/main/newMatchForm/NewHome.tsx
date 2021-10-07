import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Title from 'components/common/Title';
import Button from 'components/common/Button';

interface HomeProps {
  className: string;
}

const StyledSpan = styled.span`
  font-weight: bold;
`;

const NewHome: React.FC<HomeProps> = (props: HomeProps) => {
  const { url } = useRouteMatch();
  return (
    <div className={props.className + ' container'}>
      <div>
        <Title>전적등록시 주의 할 상황</Title>
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
            <StyledSpan className="">
              다른 선수들의 능력을 모르거나 잘못 작성하더라도,{' '}
            </StyledSpan>
            나중에 수정 및 추가가 가능합니다.
          </li>
        </ol>
      </div>
      <NavLink to={`${url}/game`}>
        <Button className="">새로운 게임 등록</Button>
      </NavLink>
    </div>
  );
};

export default NewHome;
