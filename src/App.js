import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StacksProvider, Stack} from '@mobily/stacks';
import {getAllMovies} from './api';
import {MainMovie, MoviesHorizontalScroll} from './components';

export default App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then(data => setMovies(data));
  }, []);

  return (
    <SafeAreaView>
      <StacksProvider>
        <Stack space={4}>
          <MainMovie mainMovie={movies[0]} />
          <MoviesHorizontalScroll movies={movies} />
        </Stack>
      </StacksProvider>
    </SafeAreaView>
  );
};
