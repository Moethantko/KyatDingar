import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import TabNavigator from './navigation/TabNavigator';
import Header from './components/Header';
import { render } from 'react-dom';
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
