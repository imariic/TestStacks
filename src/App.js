import 'react-native-gesture-handler';
import React from 'react';
import {StacksProvider} from '@mobily/stacks';
import AppNavigator from './navigator';

export default App = () => {
  return (
    <StacksProvider spacing={2}>
      <AppNavigator />
    </StacksProvider>
  );
};
