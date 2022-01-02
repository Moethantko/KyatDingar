import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './navigation/TabNavigator';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <TabNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
