import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';
// import Box from './components/Box';

const App = () => {
  // const [visible, setVisible] = useState(true);
  // const onPress = () => {
  //   setVisible(!visible);
  // };

  return (
    <SafeAreaView style={styles.full}>
      <Counter />
      {/*<Button title="토글" onPress={onPress} />*/}
      {/*{visible && <Box rounded={true} size="large" color="blue" />}*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

export default App;
