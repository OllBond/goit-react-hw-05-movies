import { NavLink } from 'react-router-dom';
import css from './menu.module.css';

// перевіряє чи співпадає адреса з тією на яку йде посилання to=''
const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};
const Menu = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.menu}>
        <li>
          <NavLink className={getClassName} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
