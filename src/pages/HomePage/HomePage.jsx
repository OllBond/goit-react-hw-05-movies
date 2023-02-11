import Movies from 'modules/Movies/Movies';
import css from '../HomePage/homePage.module.css';
const HomePage = () => {
  return (
    <div className="container">
      <h2 className={css.titleTrending}>Trending today</h2>
      <Movies />
    </div>
  );
};
export default HomePage;
