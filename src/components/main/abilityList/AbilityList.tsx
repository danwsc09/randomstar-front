import styled from 'styled-components';

const tempList = [
  {
    name: '자원 지원',
    explanation: '매 분마다 미네랄 300과 가스 150의 자원을 획득합니다.',
  },
  {
    name: '티끌 모아 태산',
    explanation: '짧은 주기로 미네랄 4와 가스 2의 자원을 획득합니다.',
  },
  {
    name: '22%',
    explanation: '자신의 모든 유닛의 실드 및 체력을 22%로 고정합니다.',
  },
  {
    name: '기본 유닛 금지',
    explanation: '적들의 기본유닛(마린, 저글링, 질럿)을 파괴합니다.',
  },
  {
    name: '길막용 유닛 소환',
    explanation: '길막용 유닛들을 소환합니다. 죽으면 다시 생성됩니다.',
  },
  {
    name: '인구건물 제거',
    explanation:
      '10분마다 적의 모든 오버로드, 서플라이 디포, 파일런을 제거합니다.',
  },
];

interface AbilityRowProps {
  name: string;
  explanation: string;
  className: string;
}

const AbilityList: React.FC = () => {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>정식 이름</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          {tempList.map((ability) => (
            <StyledRow
              key={ability.name}
              className="ability-row"
              name={ability.name}
              explanation={ability.explanation}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

const AbilityRow: React.FC<AbilityRowProps> = (props: AbilityRowProps) => (
  <tr className={props.className}>
    <td>{props.name}</td>
    <td>{props.explanation}</td>
  </tr>
);

const StyledRow = styled(AbilityRow)`
  color: #444;
  font-weight: bold;
  text-align: center;
`;

export default AbilityList;
