import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {DetailsScreen, HomeScreen} from './screens';
import {SCREENS} from './constants';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.home}>
        <Stack.Screen
          options={{headerShown: false}}
          name={SCREENS.home}
          component={HomeScreen}
        />
        <Stack.Screen name={SCREENS.details} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
