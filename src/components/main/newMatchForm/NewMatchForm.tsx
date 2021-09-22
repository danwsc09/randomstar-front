const NewMatchForm: React.FC = () => {
  return (
    <div>
      <div>매치 추가</div>
      <form>
        <div>
          <label>매치 설명</label>
          <input type="text" />
        </div>
        <div>
          <label>최대 판수 (9/5 라면 9를 입력해주세요)</label>
          <input type="number" />
        </div>
        <div>
          <label>팀1 인원</label>
          <input type="number" />
          <label>팀1 멤버</label>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <label>팀2 인원</label>
          <input type="number" />
          <label>팀2 멤버</label>
          <input type="text" />
          <input type="text" />
        </div>
        <input type="submit" value="매치 등록" />
      </form>
    </div>
  );
};

export default NewMatchForm;
