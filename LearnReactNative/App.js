import React from 'react';
import {SafeAreaView} from 'react-native';
import Box from './components/Box';

const App = () => {
  return (
    <SafeAreaView>
      <Box rounded />
      <Box />
    </SafeAreaView>
  );
};

export default App;
