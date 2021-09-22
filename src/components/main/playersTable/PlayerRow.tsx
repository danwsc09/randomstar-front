import one from 'assets/one.svg';
import two from 'assets/two.svg';
import three from 'assets/three.svg';

interface PlayerRowProps {
  rank: number;
  name: string;
  elo: number;
  totalGames: number;
  wins: number;
  losses: number;
}

const PlayerRow: React.FC<PlayerRowProps> = (props: PlayerRowProps) => {
  const { rank, name, elo, totalGames, wins, losses } = props;
  const rankIcon =
    rank === 1 ? (
      <img src={one} />
    ) : rank === 2 ? (
      <img src={two} />
    ) : rank === 3 ? (
      <img src={three} />
    ) : (
      rank
    );
  return (
    <tr className="player-row">
      <td>{rankIcon}</td>
      <th>{name}</th>
      <td>{elo}</td>
      <td>{totalGames}</td>
      <td>{wins}</td>
      <td>{losses}</td>
      <td>{Math.round((wins * 1000) / totalGames) / 10}%</td>
    </tr>
  );
};

export default PlayerRow;
