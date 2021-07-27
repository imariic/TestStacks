import React from 'react';
import {Image, Text, StyleSheet, ScrollView} from 'react-native';
import {Rows, Row} from '@mobily/stacks';
import {generateImageSource} from '../utils';

const MovieDetails = ({movie}) => {
  const {title, release_date, poster_path, overview, vote_average} = movie;

  return (
    <ScrollView>
      <Rows space={4} alignX={['center']} paddingTop={4}>
        <Row width="content" padding={3}>
          <Text style={styles.title}>{title}</Text>
          <Text>{overview}</Text>
        </Row>
        <Row width="content">
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={generateImageSource(poster_path)}
          />
        </Row>
        <Row width="content">
          <Text>Release date: {release_date}</Text>
        </Row>
        <Row width="content">
          <Text>Rating: {vote_average}</Text>
        </Row>
      </Rows>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
});

export default MovieDetails;
