const NewGameForm: React.FC = () => {
  return (
    <div>
      <div>게임 추가</div>
      <form>
        <div>
          <label>모드</label>
          <select>
            <option>일반</option>
            <option>혼돈</option>
            <option>1분능력</option>
          </select>
        </div>
        <div>
          <label>현제 등록 가능한 매치</label>
          <select>
            <option>두열깨모 vs 정우진묵 5/3</option>
          </select>
        </div>
        <label>SET 3</label>
        <fieldset>
          <legend>team 1</legend>
          <label>선수1</label>
          <select>
            <option>두열</option>
            <option>깨모</option>
          </select>
          <label>종족</label>
          <select>
            <option>Z</option>
            <option>T</option>
            <option>P</option>
          </select>
          <label>위치</label>
          <select>
            <option>3</option>
            <option>6</option>
            <option>9</option>
            <option>12</option>
          </select>
          <label>능력</label>
          <input type="text" />
          <label>선수2</label>
          <select>
            <option>두열</option>
            <option>깨모</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>team 2</legend>
          <label>선수1</label>
          <select>
            <option>정우</option>
            <option>진묵</option>
          </select>
          <label>종족</label>
          <select>
            <option>Z</option>
            <option>T</option>
            <option>P</option>
          </select>
          <label>위치</label>
          <select>
            <option>3</option>
            <option>6</option>
            <option>9</option>
            <option>12</option>
          </select>
          <label>능력</label>
          <input type="text" />
          <label>선수2</label>
          <select>
            <option>정우</option>
            <option>진묵</option>
          </select>
          <label>종족</label>
          <select>
            <option>Z</option>
            <option>T</option>
            <option>P</option>
          </select>
          <label>위치</label>
          <select>
            <option>3</option>
            <option>6</option>
            <option>9</option>
            <option>12</option>
          </select>
          <label>능력</label>
          <input type="text" />
        </fieldset>
        <input type="submit" value="게임 등록" />
      </form>
    </div>
  );
};

export default NewGameForm;
