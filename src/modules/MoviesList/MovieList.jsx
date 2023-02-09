import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovie } from 'shared/styles/services/movie-api';
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPopularMovie = async () => {
      try {
        setLoading(true);
        const data = await getPopularMovie();
        setMovies(prevMovies => [...prevMovies, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPopularMovie();
  }, [setLoading, setMovies, setError]);
  const elements = movies.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));
  return (
    <div>
      <ul>{elements}</ul>
      {loading && <p>...loading</p>}
      {error && <p>Movies load failed</p>}
    </div>
  );
};
export default MovieList;
