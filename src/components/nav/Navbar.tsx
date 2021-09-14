import './index.css';

const Navbar = (props: any) => {
  return (
    <nav>
      <section className="container">
        <section className="nav-container">
          <ul className="nav">
            <div className="nav-left">
              <li>홈</li>

              <li>순위</li>
              <li>능력 설명</li>
            </div>

            <div className="nav-right">
              <li>전적등록</li>
            </div>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
