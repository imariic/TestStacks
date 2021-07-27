import React from 'react';
import {MovieDetails} from '../components';

const DetailsScreen = ({route}) => {
  const movie = route.params.movie[0];

  return <MovieDetails movie={movie} />;
};

export default DetailsScreen;
