import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4a2018560b79424f21a897c5cf387007',
  },
});

export const getPopularMovie = async page => {
  const { data } = await instance.get(
    '/trending/movie/day',
    //об'єкт з налаштуваннями один з яких params: параметри запиту після ?
    {
      params: {
        page,
      },
    }
  );
  return data;
};
//`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`
