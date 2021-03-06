import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface WinnerInputProps {
  winner: string;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
  players: string[];
}

const WinnerInput: React.FC<WinnerInputProps> = ({
  winner,
  setWinner,
  players,
}) => {
  const [player1, player2, player3, player4] = players;
  return (
    <FormControl fullWidth sx={{ marginBottom: '15px' }}>
      <InputLabel>μΉμ</InputLabel>
      <Select value={winner} onChange={(e) => setWinner(e.target.value)}>
        <MenuItem value={'1'}>
          ν 1 - {player1}, {player2}
        </MenuItem>
        <MenuItem value={'2'}>
          ν 2 - {player3}, {player4}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default WinnerInput;
