import React from 'react';
import {SafeAreaView} from 'react-native';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <SafeAreaView>
      <Greeting name="Props" />
      <Greeting name="Props2" />
      <Greeting name="Props3" />
      <Greeting />
    </SafeAreaView>
  );
};

export default App;
