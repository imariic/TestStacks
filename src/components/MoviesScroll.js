import React from 'react';
import {ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Box, Stack, useCurrentBreakpoint} from '@mobily/stacks';
import {SCREENS} from '../constants';

const MoviesScroll = ({movies, navigation}) => {
  const breakpoint = useCurrentBreakpoint();

  const isItemHorizontal = () => {
    return breakpoint === 'tablet';
  };

  const onMoviePress = id => {
    const movie = movies.filter(movie => movie.id === id);
    return () => navigation.navigate(SCREENS.details, {movie: movie});
  };

  const constructMoviesList = () => {
    const moviesForRendering = movies?.slice(1);

    return moviesForRendering?.map(movie => {
      const {id, poster_path} = movie;
      const source = {
        uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
      };

      return (
        <TouchableOpacity key={id} onPress={onMoviePress(id)}>
          <Image style={styles.image} source={source} resizeMode="stretch" />
        </TouchableOpacity>
      );
    });
  };

  return (
    <Box padding={2}>
      <ScrollView
        horizontal={isItemHorizontal()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Stack
          align={['center', 'stretch']}
          space={2}
          horizontal={isItemHorizontal()}>
          {constructMoviesList()}
        </Stack>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 250,
  },
});

export default MoviesScroll;
