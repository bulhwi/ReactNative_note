import React from 'react';
import {SafeAreaView} from 'react-native';
import Greeting from './components/Greeting';

const App = () => {
  const name = 'props';
  return (
    <SafeAreaView>
      <Greeting name={name} />
      <Greeting name={`${name}2`} />
      <Greeting name={`${name}3`} />
      <Greeting />
    </SafeAreaView>
  );
};

export default App;
