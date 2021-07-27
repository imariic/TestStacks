import React from 'react';
import {ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Box, Stack, useCurrentBreakpoint} from '@mobily/stacks';
import {SCREENS} from '../constants';
import {generateImageSource} from '../utils';

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

      return (
        <TouchableOpacity key={id} onPress={onMoviePress(id)}>
          <Image
            style={styles.image}
            source={generateImageSource(poster_path)}
            resizeMode="stretch"
          />
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
