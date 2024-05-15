/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'teal',
    padding: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
});

const App = () => {
  return (
    <PaperProvider >
      <TextInput 
      style={styles.input} 
      label="Phone Number"
      left={< TextInput.Icon icon="phone"/>}
      />  

      <TextInput
      style={styles.input} 
      label="Password"
      secureTextEntry
      left={< TextInput.Icon icon="lock"/>}
      right={<TextInput.Icon icon="eye"/>}
    />

    </PaperProvider>

  ); 
};

export default App;
