import PlayerInput from 'components/common/input/PlayerInput';
import AbilityInput from 'components/common/input/AbilityInput';
import RaceInput from './input/RaceInput';
import LocationInput from './input/LocationInput';

interface playerFormProps {
  abilities: Ability[];
  players: string[];
  showAbility: boolean;
  playerInfo: PlayerInfo;
  setPlayerInfo: React.Dispatch<React.SetStateAction<PlayerInfo>>;
}

const PlayerForm: React.FC<playerFormProps> = ({
  showAbility,
  playerInfo,
  setPlayerInfo,
  abilities,
  players,
}: playerFormProps) => {
  return (
    <div>
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
