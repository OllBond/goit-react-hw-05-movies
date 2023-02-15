import { Link, useLocation } from 'react-router-dom';

import css from '../MoviesList/moviesList.module.css';

const MoviesList = ({ movies }) => {
  // const navigate = useNavigate();

  const location = useLocation();
  // const from = location.state?.from || '/movie';

  const elements = movies.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ));
  return <ul className={css.moviesList}>{elements}</ul>;
};
export default MoviesList;

MoviesList.defaultProps = {
  movies: [],
};