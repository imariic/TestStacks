import React from 'react';
import {Image, Text, StyleSheet, ScrollView} from 'react-native';
import {Rows, Row, useCurrentBreakpoint} from '@mobily/stacks';
import {generateImageSource, resolveStyle} from '../utils';

const MovieDetails = ({movie}) => {
  const breakpoint = useCurrentBreakpoint();
  const {title, release_date, poster_path, overview, vote_average} = movie;

  const titleStyle = [
    styles.title,
    resolveStyle(styles.titleTablet, styles.titleMobile, breakpoint),
  ];

  const imageStyle = resolveStyle(
    styles.imageTablet,
    styles.imageMobile,
    breakpoint,
  );

  const descriptionStyle = resolveStyle(
    styles.descriptionTablet,
    styles.descriptionMobile,
    breakpoint,
  );

  const releaseDateAndRatingStyle = resolveStyle(
    styles.releaseAndRatinTablet,
    styles.releaseAndRatingMobile,
    breakpoint,
  );

  return (
    <ScrollView>
      <Rows space={4} alignX={['center']} paddingTop={4}>
        <Row width="content" padding={3}>
          <Text style={titleStyle}>{title}</Text>
          <Text style={descriptionStyle}>{overview}</Text>
        </Row>
        <Row width="content">
          <Image
            resizeMode="stretch"
            style={imageStyle}
            source={generateImageSource(poster_path)}
          />
        </Row>
        <Row width="content">
          <Text style={releaseDateAndRatingStyle}>
            Release date: {release_date}
          </Text>
        </Row>
        <Row width="content">
          <Text style={releaseDateAndRatingStyle}>Rating: {vote_average}</Text>
        </Row>
      </Rows>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageMobile: {
    height: 400,
    width: 300,
  },
  imageTablet: {
    height: 700,
    width: 500,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
  titleMobile: {
    fontSize: 20,
  },
  titleTablet: {
    fontSize: 35,
  },
  descriptionMobile: {
    fontSize: 15,
  },
  descriptionTablet: {
    fontSize: 25,
  },
  releaseAndRatingMobile: {
    fontSize: 20,
  },
  releaseAndRatinTablet: {
    fontSize: 30,
  },
});

export default MovieDetails;
