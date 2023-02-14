import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4a2018560b79424f21a897c5cf387007',
    language: 'en-US',
  },
});

export const getPopularMovie = async (page = 1) => {
  const { data } = await instance.get(
    '/trending/movie/day',
    //об'єкт з налаштуваннями один з яких params: параметри запиту після ?
    {
      params: {
        page,
      },
    }
  );
  return data.results;
};

export const getDetailsMovie = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const getSearchMovie = async query => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data.results;
};

export const getCastMovie = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getReviewsMovie = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  // console.log(data.results);
  return data.results;
};
