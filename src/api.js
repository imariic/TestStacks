import axios from 'axios';

const axiosInstance = axios.create();

export const getAllMovies = async () => {
  const response = await axiosInstance.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=3b2d732b5bcf26aa149ff4e6ba7a7632&language=en-US&page=1',
  );

  const movies = response.data.results;

  return movies;
};
