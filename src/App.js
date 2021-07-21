import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {StacksProvider, Stack, Box, Columns, Column} from '@mobily/stacks';
import {Avatar} from 'react-native-elements';
import {getAllMovies} from './api';

export default App = () => {
  const [movies, setMovies] = useState([]);

  const constructMoviesList = () => {
    return movies.map(movie => (
      <Column>
        <Image
          style={styles.smallImage}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
          }}
          resizeMode="stretch"
        />
      </Column>
    ));
  };

  useEffect(() => {
    getAllMovies().then(data => setMovies(data));
  }, []);

  console.log(movies[0]);
  return (
    <SafeAreaView>
      <StacksProvider spacing={4}>
        <Stack space={4}>
          <Box>
            <Stack space={4} align="center">
              <Image
                style={styles.image}
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${movies[0]?.poster_path}`,
                }}
                resizeMode="stretch"
              />
              <Box>
                <Text>{movies[0]?.title}</Text>
                <Text>{movies[0]?.vote_average}</Text>
              </Box>
            </Stack>
          </Box>
          <ScrollView horizontal style={{marginHorizontal: 2}}>
            <Columns space={2}>{constructMoviesList()}</Columns>
          </ScrollView>
        </Stack>
      </StacksProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 300,
  },
  smallImage: {
    width: 50,
    height: 70,
  },
});
