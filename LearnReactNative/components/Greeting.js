import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  return (
    <View>
      <Text>Component Test {props.name}</Text>
    </View>
  );
}

Greeting.defaultProps = {
  name: 'default Props',
};

export default Greeting;
