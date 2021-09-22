const Match: React.FC = () => {
  return (
    <div className="match-container">
      <div className="game-mode">일반 2:2</div>

      <div className="team win">
        <div className="player">
          <div className="name">12시 변현제</div>
          <div className="ability">5돈무</div>
        </div>
        <div className="player">
          <div className="name">3시 임진묵</div>
          <div className="ability">10분 일꾼학살</div>
        </div>
      </div>
      <div className="team loss">
        <div className="player">
          <div className="name">9시 김정우</div>
          <div className="ability">산책금지</div>
        </div>
        <div className="player">
          <div className="name">6시 한두열</div>
          <div className="ability">깃발</div>
        </div>
      </div>
      <div className="game-summary">
        능력으로 압살 능력으로 압살 능력으로 압살 능력으로 압살 능력으로 압살
      </div>
    </div>
  );
};

export default Match;
