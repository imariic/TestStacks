import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {Stack, Box} from '@mobily/stacks';

const MainMovie = ({mainMovie}) => {
  if (!mainMovie) {
    return null;
  }

  const {poster_path, title, vote_average} = mainMovie;

  return (
    <Box>
      <Stack space={4} align="center">
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
          }}
          resizeMode="stretch"
        />
        <Text>{title}</Text>
        <Text>{vote_average}</Text>
      </Stack>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 300,
  },
});

export default MainMovie;
