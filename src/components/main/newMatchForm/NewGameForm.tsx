import React, { useState } from 'react';

import Box from '@mui/material/Box';
import PlayerForm from 'components/common/PlayerForm';
import ModeInput from 'components/common/input/ModeInput';
import WinnerInput from 'components/common/input/WinnerInput';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const defaultPlayerInfo: PlayerInfo = {
  name: '',
  ability: '',
  location: '',
  race: '',
};

const abilityList = [
  {
    name: '자원 지원',
    explanation: '매 분마다 미네랄 300과 가스 150의 자원을 획득합니다.',
  },
  {
    name: '티끌 모아 태산',
    explanation: '짧은 주기로 미네랄 4와 가스 2의 자원을 획득합니다.',
  },
  {
    name: '22%',
    explanation: '자신의 모든 유닛의 실드 및 체력을 22%로 고정합니다.',
  },
  {
    name: '기본 유닛 금지',
    explanation: '적들의 기본유닛(마린, 저글링, 질럿)을 파괴합니다.',
  },
  {
    name: '길막용 유닛 소환',
    explanation: '길막용 유닛들을 소환합니다. 죽으면 다시 생성됩니다.',
  },
  {
    name: '인구건물 제거',
    explanation:
      '10분마다 적의 모든 오버로드, 서플라이 디포, 파일런을 제거합니다.',
  },
];

const players = [
  '김정우',
  '변현제',
  '임진묵',
  '한두열',
  '윤수철',
  '김경모',
  '장윤철',
  '김성현',
  '지동원',
];

const NewGameForm: React.FC = () => {
  const [mode, setMode] = useState('normal');
  const [winner, setWinner] = useState('');
  const [player1Info, setPlayer1Info] = useState<PlayerInfo>(defaultPlayerInfo);
  const [player2Info, setPlayer2Info] = useState<PlayerInfo>(defaultPlayerInfo);
  const [player3Info, setPlayer3Info] = useState<PlayerInfo>(defaultPlayerInfo);
  const [player4Info, setPlayer4Info] = useState<PlayerInfo>(defaultPlayerInfo);
  const [summary, setSummary] = useState('');

  const handleSubmit = () => {
    // 등록
    const namesFilled =
      player1Info.name !== '' &&
      player2Info.name !== '' &&
      player3Info.name !== '' &&
      player4Info.name !== '';

    if (!namesFilled) {
      alert('선수들의 이름을 입력해주세요.');
    } else if (winner === '') {
      alert('승자를 입력해주세요');
    } else {
      // send data to server and move to diff page
    }
  };

  return (
    <div>
      <Typography component="h4" variant="h4" sx={{ textAlign: 'center' }}>
        게임 추가
      </Typography>
      <Box sx={{ width: '60%', margin: '20px auto 0' }}>
        <ModeInput setMode={setMode} mode={mode} />
      </Box>
      <Typography component="h6" variant="h6" sx={{ textAlign: 'center' }}>
        팀 1
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '60%',
          margin: '0 auto',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <PlayerForm
            abilities={abilityList}
            players={players}
            showAbility={mode === 'normal'}
            playerInfo={player1Info}
            setPlayerInfo={setPlayer1Info}
            label="선수 1"
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <PlayerForm
            abilities={abilityList}
            players={players}
            showAbility={mode === 'normal'}
            playerInfo={player2Info}
            setPlayerInfo={setPlayer2Info}
            label="선수 2"
          />
        </Box>
      </Box>
      <Typography component="h6" variant="h6" sx={{ textAlign: 'center' }}>
        팀 2
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '60%',
          margin: '0 auto',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <PlayerForm
            abilities={abilityList}
            players={players}
            showAbility={mode === 'normal'}
            playerInfo={player3Info}
            setPlayerInfo={setPlayer3Info}
            label="선수 3"
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <PlayerForm
            abilities={abilityList}
            players={players}
            showAbility={mode === 'normal'}
            playerInfo={player4Info}
            setPlayerInfo={setPlayer4Info}
            label="선수 4"
          />
        </Box>
      </Box>

      <Box sx={{ width: '60%', margin: '0 auto' }}>
        <WinnerInput
          winner={winner}
          setWinner={setWinner}
          players={[
            player1Info.name,
            player2Info.name,
            player3Info.name,
            player4Info.name,
          ]}
        />
      </Box>
      <Box sx={{ width: '60%', margin: '0 auto' }}>
        <TextField
          label="게임 내용"
          multiline
          rows={4}
          placeholder="게임 내용을 적어주세요"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          fullWidth
        />
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="outlined" color="success" onClick={handleSubmit}>
          게임 등록
        </Button>
      </Box>
    </div>
  );
};

export default NewGameForm;
