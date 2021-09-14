import logo from 'assets/logo-transparent.png';
import './index.css';

const Header = (props: any) => {
  return (
    <header>
      <section className="container">
        <section className="header-row">
          <div className="header-left">
            <a href="#">
              <img src={logo} />
            </a>
          </div>
          <div className="header-middle">
            <a href="#">랜능크 전적사이트</a>
          </div>
          <ul className="header-right">
            <li>
              <a href="#">언어</a>
            </li>
            <li>
              <a href="#">Light/Dark</a>
            </li>
            <li>
              <a href="#">로그인</a>
            </li>
          </ul>
        </section>
      </section>
    </header>
  );
};

export default Header;
