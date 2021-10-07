import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface RaceInputProps {
  playerInfo: PlayerInfo;
  setPlayerInfo: React.Dispatch<React.SetStateAction<PlayerInfo>>;
}

const RaceInput: React.FC<RaceInputProps> = ({ playerInfo, setPlayerInfo }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>종족</InputLabel>
      <Select
        value={playerInfo.race || ''}
        onChange={(e) => setPlayerInfo({ ...playerInfo, race: e.target.value })}
      >
        <MenuItem value={'Z'}>Zerg</MenuItem>
        <MenuItem value={'T'}>Terran</MenuItem>
        <MenuItem value={'P'}>Protoss</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RaceInput;
