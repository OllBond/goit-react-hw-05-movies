import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsMovie } from 'shared/styles/services/movie-api';

const MovieDetailsPage = () => {
  const [movie, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchDetailsMovie = async () => {
      try {
        setLoading(true);
        const result = await getDetailsMovie(movieId);
        console.log(result);
        setMovies(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetailsMovie();
  }, [setLoading, setMovies, setError]);
  return (
    <div>
      <button type="button">Go back</button>
      <img src="" alt="" />
      <h2>{movie.original_title}</h2>
      <p>{movie.overview}</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};
export default MovieDetailsPage;
