import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface LocationInputProps {
  playerInfo: PlayerInfo;
  setPlayerInfo: React.Dispatch<React.SetStateAction<PlayerInfo>>;
}

const LocationInput: React.FC<LocationInputProps> = ({
  playerInfo,
  setPlayerInfo,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>위치</InputLabel>
      <Select
        value={playerInfo?.location || ''}
        onChange={(e) =>
          setPlayerInfo({ ...playerInfo, location: e.target.value })
        }
      >
        <MenuItem value={'12'}>12</MenuItem>
        <MenuItem value={'3'}>3</MenuItem>
        <MenuItem value={'6'}>6</MenuItem>
        <MenuItem value={'9'}>9</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LocationInput;
