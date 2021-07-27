import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StacksProvider, Stack} from '@mobily/stacks';
import {getAllMovies} from './api';
import {MainMovie, MoviesHorizontalScroll} from './components';

export default App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then(data => setMovies(data));
  }, []);

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};
