/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TouchID from 'react-native-touch-id';

const App = () => {
  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  const activateLockScreen = () => {
    TouchID.authenticate('some text', optionalConfigObject)
      .then(({biometryType}: any) => {
        // Success code
        if (biometryType === 'FaceID') {
          Alert.alert('Authenticated Successfully FaceID');
        } else {
          Alert.alert('Authenticated Successfully TouchID');
        }
      })
      .catch(({error}: any) => {
        // Failure code
        Alert.alert('Authenticated Failed');
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          activateLockScreen();
        }}
        activeOpacity={0.6}
        style={styles.button}>
        <Text style={styles.text}>Activate LockScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    paddingHorizontal: '10%',
    paddingVertical: 10,
    backgroundColor: 'lightblue',
    borderRadius: 4,
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1,
    color: '#000',
  },
});
