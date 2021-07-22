import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {Stack, Box} from '@mobily/stacks';

const MainMovie = ({mainMovie}) => {
  if (!mainMovie) {
    return null;
  }

  const {poster_path, title, vote_average} = mainMovie;
  const source = {
    uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
  };

  return (
    <Stack space={4} align="center" paddingTop={5}>
      <Image style={styles.image} source={source} resizeMode="stretch" />
      <Text>{title}</Text>
      <Text>{vote_average}/10</Text>
    </Stack>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 350,
  },
});

export default MainMovie;
