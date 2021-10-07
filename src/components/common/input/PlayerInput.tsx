import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface PlayerInputProps {
  players: string[];
  playerInfo: PlayerInfo;
  setPlayerInfo: React.Dispatch<React.SetStateAction<PlayerInfo>>;
}

const PlayerInput: React.FC<PlayerInputProps> = ({
  players,
  playerInfo,
  setPlayerInfo,
}: PlayerInputProps) => {
  return (
    <Autocomplete
      sx={{ marginBottom: '15px' }}
      options={players}
      onInputChange={(ev, value) =>
        setPlayerInfo({ ...playerInfo, name: value })
      }
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(ev) =>
            setPlayerInfo({ ...playerInfo, name: ev.target.value })
          }
          label="선수"
        />
      )}
    />
  );
};

export default PlayerInput;
