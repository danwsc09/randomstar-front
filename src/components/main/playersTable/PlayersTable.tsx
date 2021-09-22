import Title from 'components/common/Title';
import PlayerRow from 'components/main/playersTable/PlayerRow';

import './index.css';

interface PlayersTableProps {
  numberOfRows?: number;
}

const PlayersTable: React.FC<PlayersTableProps> = (
  props: PlayersTableProps,
) => {
  const numRows = props.numberOfRows == null ? 100 : 4;

  return (
    <section className="rank">
      <div className="rank-title">
        <Title title={`기록된 게임 수: 1,231`} />
      </div>
      <table className="players-summary">
        <TableHeader />
        <tbody>
          <PlayerRow
            rank={1}
            name={'변현제'}
            elo={1130}
            totalGames={500}
            wins={281}
            losses={219}
          />
          <PlayerRow
            rank={2}
            name={'김정우'}
            elo={1127}
            totalGames={490}
            wins={271}
            losses={219}
          />
          <PlayerRow
            rank={3}
            name={'임진묵'}
            elo={1127}
            totalGames={490}
            wins={271}
            losses={219}
          />
          <PlayerRow
            rank={4}
            name={'한두열'}
            elo={1127}
            totalGames={490}
            wins={271}
            losses={219}
          />
        </tbody>
      </table>
    </section>
  );
};

const TableHeader: React.FC = () => (
  <thead>
    <tr>
      <th>순위</th>
      <th>이름</th>
      <th>점수</th>
      <th>게임 수</th>
      <th>승</th>
      <th>패</th>
      <th>승률</th>
    </tr>
  </thead>
);

export default PlayersTable;
