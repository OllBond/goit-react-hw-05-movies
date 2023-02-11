import { BrowserRouter } from 'react-router-dom';
import Menu from './modules/Menu/Menu';
import UserRoutes from 'UserRoutes';
import css from './shared/styles/styles.css';
export const App = () => {
  return (
    <BrowserRouter className={css.styles}>
      <Menu />
      <UserRoutes />
    </BrowserRouter>
  );
};
