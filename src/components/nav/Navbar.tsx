import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <nav>
      <section className="container">
        <section className="nav-container">
          <ul className="nav">
            <div className="nav-left">
              <li>
                <NavLink to="/" activeClassName="active-nav" exact>
                  홈
                </NavLink>
              </li>
              <li>
                <NavLink to="/players" activeClassName="active-nav">
                  순위
                </NavLink>
              </li>
              <li>
                <NavLink to="/abilities" activeClassName="active-nav">
                  능력 설명
                </NavLink>
              </li>
            </div>

            <div className="nav-right">
              <li>
                <NavLink to="/new" activeClassName="active-nav">
                  전적등록
                </NavLink>
              </li>
            </div>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
