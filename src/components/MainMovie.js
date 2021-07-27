import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {Stack, useCurrentBreakpoint} from '@mobily/stacks';
import {generateImageSource, resolveStyle} from '../utils';

const MainMovie = ({mainMovie}) => {
  const breakpoint = useCurrentBreakpoint();

  if (!mainMovie) {
    return null;
  }

  const {poster_path, title, vote_average} = mainMovie;

  return (
    <Stack space={4} align="center" paddingTop={5}>
      <Image
        style={resolveStyle(styles.tabletImage, styles.mobileImage, breakpoint)}
        source={generateImageSource(poster_path)}
        resizeMode="stretch"
      />
      <Text style={resolveStyle(styles.tabletTitle, styles.mobileTitle)}>
        {title}
      </Text>
      <Text style={resolveStyle(styles.tabletRating, styles.mobileRating)}>
        {vote_average}/10
      </Text>
    </Stack>
  );
};

const styles = StyleSheet.create({
  mobileImage: {
    width: 300,
    height: 350,
  },
  tabletImage: {
    width: 500,
    height: 700,
  },
  mobileTitle: {
    fontSize: 20,
  },
  tabletTitle: {
    fontSize: 40,
  },
  mobileRating: {
    fontSize: 15,
  },
  tabletRating: {
    fontSize: 30,
  },
});

export default MainMovie;
