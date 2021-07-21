import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {StacksProvider, Stack, Box} from '@mobily/stacks';
import {getAllMovies} from './api';

export default App = () => {
  const [movies, setMovies] = useState([]);

  const constructMoviesList = () => {
    return movies.map(movie => <Text>{movie.title}</Text>);
  };

  useEffect(() => {
    getAllMovies().then(data => setMovies(data));
  }, []);

  return (
    <SafeAreaView>
      <StacksProvider spacing={4}>
        <Stack space={2}>{constructMoviesList()}</Stack>
      </StacksProvider>
    </SafeAreaView>
  );
};
