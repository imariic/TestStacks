import React from 'react';
import {ScrollView, StyleSheet, Image} from 'react-native';
import {Box, Columns, Column} from '@mobily/stacks';

const MoviesHorizontalScroll = ({movies}) => {
  const constructMoviesList = () => {
    const moviesForRendering = movies?.slice(1);

    return moviesForRendering?.map(movie => {
      const {id, poster_path} = movie;
      const source = {
        uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
      };

      return (
        <Column key={id}>
          <Image style={styles.image} source={source} resizeMode="stretch" />
        </Column>
      );
    });
  };

  return (
    <Box padding={2}>
      <ScrollView horizontal>
        <Columns space={2}>{constructMoviesList()}</Columns>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 100,
  },
});

export default MoviesHorizontalScroll;
