import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  return (
    <>
      <View>
        <Text>Component Test {props.name}</Text>
      </View>
      <Text>Extra Text</Text>
    </>
  );
}

Greeting.defaultProps = {
  name: 'default Props',
};

export default Greeting;
