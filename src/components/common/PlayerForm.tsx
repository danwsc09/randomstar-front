import PlayerInput from 'components/common/input/PlayerInput';
import AbilityInput from 'components/common/input/AbilityInput';
import RaceInput from './input/RaceInput';
import LocationInput from './input/LocationInput';
import Typography from '@mui/material/Typography';

interface playerFormProps {
  abilities: Ability[];
  players: string[];
  showAbility: boolean;
  playerInfo: PlayerInfo;
  setPlayerInfo: React.Dispatch<React.SetStateAction<PlayerInfo>>;
  label: string;
}

const PlayerForm: React.FC<playerFormProps> = ({
  showAbility,
  playerInfo,
  setPlayerInfo,
  abilities,
  players,
  label,
}: playerFormProps) => {
  return (
    <div>
      <Typography component="div" variant="body1" sx={{ textAlign: 'center' }}>
        {label}
      </Typography>
      <PlayerInput
        players={players}
        playerInfo={playerInfo}
        setPlayerInfo={setPlayerInfo}
      />
      <RaceInput playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />
      <LocationInput playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />

      {showAbility ? (
        <AbilityInput
          playerInfo={playerInfo}
          setPlayerInfo={setPlayerInfo}
          abilities={abilities}
        />
      ) : null}
    </div>
  );
};

export default PlayerForm;
