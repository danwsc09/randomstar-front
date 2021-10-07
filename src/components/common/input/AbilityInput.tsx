import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface AbilityInputProps {
  abilities: Ability[];
  playerInfo: PlayerInfo;
  setPlayerInfo: React.Dispatch<React.SetStateAction<PlayerInfo>>;
}

const AbilityInput: React.FC<AbilityInputProps> = ({
  abilities,
  playerInfo,
  setPlayerInfo,
}: AbilityInputProps) => {
  return (
    <Autocomplete
      options={abilities}
      getOptionLabel={(option) => option.name}
      onInputChange={(ev, value) =>
        setPlayerInfo({ ...playerInfo, ability: value })
      }
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(ev) =>
            setPlayerInfo({ ...playerInfo, name: ev.target.value })
          }
          label="능력"
        />
      )}
    />
  );
};

export default AbilityInput;
