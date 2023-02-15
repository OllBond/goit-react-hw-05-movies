import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'shared/styles/services/movieApi';

import css from '../CastPage/castPage.module.css';

const CastPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCastMovie = async () => {
      try {
        setLoading(true);
        const result = await getCastMovie(movieId);
        // console.log(result);
        setMovies(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCastMovie();
  }, [movieId]);

  const elements = movies.map(
    ({ id, character, original_name, profile_path }) => (
      <li key={id}>
        <img
          width="100"
          height="150"
          src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
          alt={original_name}
        />
        <p>{original_name}</p>
        <p>Character: {character}</p>
      </li>
    )
  );
  return (
    <>
      {loading && <p>...loading</p>}
      {error && <p>Error</p>}
      {movies && (
        <div className={css.castWrapper}>
          <ul>{elements}</ul>
        </div>
      )}
    </>
  );
};
export default CastPage;
