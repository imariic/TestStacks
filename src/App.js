import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {StacksProvider, Stack, useWindowDimensions} from '@mobily/stacks';
import {getAllMovies} from './api';
import {MainMovie, MoviesHorizontalScroll} from './components';

export default App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then(data => setMovies(data));
  }, []);

  return (
    <StacksProvider spacing={2}>
      <SafeAreaView>
        <ScrollView>
          <Stack space={4}>
            <MainMovie mainMovie={movies[0]} />
            <MoviesHorizontalScroll movies={movies} />
          </Stack>
        </ScrollView>
      </SafeAreaView>
    </StacksProvider>
  );
};
