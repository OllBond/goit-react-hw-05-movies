import { NavLink } from 'react-router-dom';
import items from './items';
import css from './menu.module.css';
// перевіряє чи співпадає адреса з тією на яку йде посилання to=''
const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};
const Menu = () => {
  const elements = items.map(({ text, link }) => (
    <li>
      <NavLink className={getClassName} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={css.menu}>{elements}</ul>;
};
export default Menu;
