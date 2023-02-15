import Movies from 'modules/TrendingMovies/TrendingMovies';
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
