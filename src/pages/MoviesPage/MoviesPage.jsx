import { useState, useEffect } from 'react';
import MoviesSearchForm from 'modules/MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'modules/MoviesList/MoviesList';
import { searchMovie } from 'shared/styles/services/movie-api';

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchSearchMovie = async () => {
      try {
        setLoading(true);
        const data = await searchMovie(search);
        console.log(data);
        setMovies(prevMovies => [...prevMovies, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchMovie();
  }, [search]);

  const onSearchMovie = ({ search }) => {
    setSearch(search);
  };

  return (
    <div>
      <MoviesSearchForm onSubmit={onSearchMovie} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loading && <p>...loading</p>}
      {error && <p>Movies load failed</p>}
    </div>
  );
};
export default MoviesPage;
