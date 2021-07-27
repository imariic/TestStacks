import React from 'react';
import {ScrollView, StyleSheet, Image} from 'react-native';
import {Box, Stack, useCurrentBreakpoint} from '@mobily/stacks';

const MoviesScroll = ({movies}) => {
  const breakpoint = useCurrentBreakpoint();

  const isItemHorizontal = () => {
    return breakpoint === 'tablet';
  };

  const constructMoviesList = () => {
    const moviesForRendering = movies?.slice(1);

    return moviesForRendering?.map(movie => {
      const {id, poster_path} = movie;
      const source = {
        uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
      };

      return (
        <Image
          key={id}
          style={styles.image}
          source={source}
          resizeMode="stretch"
        />
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
