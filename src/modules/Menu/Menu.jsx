import { Link } from 'react-router-dom';
import css from './menu-module.css';
const Menu = () => {
  return (
    <div className={css.wrapper}>
      <ul>
        <li>
          <Link className={css.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={css.link} to="/movies">
            Movies
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
