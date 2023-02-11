import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsMovie } from 'shared/styles/services/movie-api';

const MovieDetailsPage = () => {
  const [movie, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    const fetchDetailsMovie = async () => {
      try {
        setLoading(true);
        const result = await getDetailsMovie(movieId);
        console.log(result);
        setMovies(result);
        setGenres(result.genres);
        setDate(result.release_date);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetailsMovie();
  }, [setLoading, setMovies, setError]);

  const elements = genres.map(({ name, id }) => <li key={id}>{name}</li>);
  const year = new Date(date).getFullYear();
  const { poster_path, original_title, overview, popularity } = movie;
  return (
    <>
      <button type="button">Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
          loading="lazy"
        />
        <div>
          <h2>
            {original_title} <span>({year})</span>
          </h2>
          <p>{popularity}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>{elements}</ul>
        </div>
      </div>
    </>
  );
};
export default MovieDetailsPage;
