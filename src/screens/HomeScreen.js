import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {Stack} from '@mobily/stacks';
import {getAllMovies} from '../api';
import {MainMovie, MoviesScroll} from '../components';

const HomeScreen = ({navigation}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then(data => setMovies(data));
  }, []);

  return (
    <ScrollView>
      <Stack space={4}>
        <MainMovie mainMovie={movies[0]} />
        <MoviesScroll navigation={navigation} movies={movies} />
      </Stack>
    </ScrollView>
  );
};

export default HomeScreen;
