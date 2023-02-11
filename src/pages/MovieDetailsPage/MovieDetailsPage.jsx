import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { getDetailsMovie } from 'shared/styles/services/movie-api';
import css from '../MovieDetailsPage/movieDetailsPage.module.css';
const MovieDetailsPage = () => {
  const [movie, setMovies] = useState({});
  // const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  const { movieId } = useParams();

  // ф-я navigate примусово змінює адресу
  // потрібна коли не знаю адресу переходу
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetailsMovie = async () => {
      try {
        // setLoading(true);
        const result = await getDetailsMovie(movieId);
        console.log(result);
        setMovies(result);
        setGenres(result.genres);
        setDate(result.release_date);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchDetailsMovie();
  }, [movieId]);

  // переміщення на одну сторінку назад
  const goBack = () => navigate(-1);

  const elements = genres.map(({ name, id }) => (
    <li key={id} className={css.genresItems}>
      {name}
    </li>
  ));
  const year = new Date(date).getFullYear();
  const { poster_path, original_title, overview, popularity } = movie;
  return (
    <>
      <button className={css.btnGoBack} onClick={goBack} type="button">
        <HiArrowNarrowLeft /> Go back
      </button>
      <div className={css.wrapperOneFilm}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
          loading="lazy"
        />
        <div className={css.wrapperDetails}>
          <h2>
            {original_title} <span>({year})</span>
          </h2>
          <p>{popularity}</p>
          <h3 className={css.titleDetails}>Overview</h3>
          <p>{overview}</p>
          <h3 className={css.titleDetails}>Genres</h3>
          <ul className={css.genresList}>{elements}</ul>
        </div>
      </div>
    </>
  );
};
export default MovieDetailsPage;
