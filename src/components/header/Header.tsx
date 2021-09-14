import { Link } from 'react-router-dom';

import logo from 'assets/logo-transparent.png';
import './index.css';

const Header: React.FC = () => {
  return (
    <header>
      <section className="container">
        <section className="header-row">
          <div className="header-left">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="header-middle">
            <Link to="/">랜능크 전적사이트</Link>
          </div>
          <ul className="header-right">
            <li>언어</li>
            <li>Light/Dark</li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </section>
      </section>
    </header>
  );
};

export default Header;
