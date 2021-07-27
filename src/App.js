import 'react-native-gesture-handler';
import React from 'react';
import {StacksProvider} from '@mobily/stacks';
import AppNaviator from './navigator';

export default App = () => {
  return (
    <StacksProvider spacing={2}>
      <AppNaviator />
    </StacksProvider>
  );
};
