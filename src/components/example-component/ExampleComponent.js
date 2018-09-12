import React from 'react';
import { Text, View } from 'react-native';
import ExampleComponentStyles from './ExampleComponentStyles';

const ExampleComponent = () => {
  const { container, helloWorld } =  ExampleComponentStyles;

  return (
    <View style={container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      <View style={helloWorld}>
        <Text>Hello, World!</Text>
      </View>
    </View>
  );
};

export default ExampleComponent;
