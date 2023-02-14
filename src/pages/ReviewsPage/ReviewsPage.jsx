import { Notify } from 'notiflix';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'shared/styles/services/movieApi';

import css from '../ReviewsPage/reviewsPage.module.css';

const ReviewsPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviewsMovie = async () => {
      try {
        setLoading(true);
        const results = await getReviewsMovie(movieId);
        console.log(results);
        results.length === 0
          ? Notify.info('We don`t have any reviews for this movie')
          : setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviewsMovie();
  }, [movieId]);

  const elements = movies.map(({ id, author, content }) => (
    <li key={id}>
      <p className={css.author}>Author: {author}</p>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {loading && <p>...loading</p>}
      {error && <p>Error</p>}
      {movies.length > 0 && (
        <div>
          <ul>{elements}</ul>
        </div>
      )}
    </>
  );
};
export default ReviewsPage;
