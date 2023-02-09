import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const MovieDetailsPage = () => {
  const [movie, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  return;
};
export default MovieDetailsPage;
