import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/Home';
import Calculate from '../screens/Calculate';

const TabNavigator = createBottomTabNavigator({
    HomeScreen: Home,
    CalculateScreen: Calculate
}, {
    tabBarOptions: {
        activeTintColor: 'black',
        style: {
            height: 30,
            marginBottom: 12
        }
    }
});

const styles = StyleSheet.create({});

export default createAppContainer(TabNavigator);