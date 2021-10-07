import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface ModeInputProps {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

const ModeInput: React.FC<ModeInputProps> = ({ mode, setMode }) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: '15px' }}>
      <InputLabel>모드</InputLabel>
      <Select value={mode} onChange={(e) => setMode(e.target.value)}>
        <MenuItem value={'normal'}>일반</MenuItem>
        <MenuItem value={'chaos'}>혼돈</MenuItem>
        <MenuItem value={'one'}>1분 능력</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ModeInput;
