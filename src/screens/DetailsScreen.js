import React from 'react';
import {View, Text} from 'react-native';

const DetailsScreen = ({route}) => {
  const movie = route.params.movie[0];
  return (
    <View>
      <Text>{movie.title}</Text>
    </View>
  );
};

export default DetailsScreen;
