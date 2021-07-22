import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {Stack, useCurrentBreakpoint} from '@mobily/stacks';

const MainMovie = ({mainMovie}) => {
  const breakpoint = useCurrentBreakpoint();

  if (!mainMovie) {
    return null;
  }

  const resolveStyle = (tabletStyle, mobileStyle) => {
    return breakpoint === 'tablet' ? tabletStyle : mobileStyle;
  };

  const {poster_path, title, vote_average} = mainMovie;
  const source = {
    uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
  };

  return (
    <Stack space={4} align="center" paddingTop={5}>
      <Image
        style={resolveStyle(styles.tabletImage, styles.mobileImage)}
        source={source}
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
