import MovieList from 'modules/MoviesList/MovieList';
import css from '../HomePage/homePage.module.css';
const HomePage = () => {
  return (
    <div className="container">
      <h2 className={css.titleTrending}>Trending today</h2>
      <MovieList />
    </div>
  );
};
export default HomePage;
