import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/Home';
import Calculate from '../screens/Calculate';

const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Convert: Calculate
}, {
    tabBarOptions: {
        activeTintColor: '#5d8263',
        style: {
            height: 33,
            marginBottom: 12,
        }
    }
});

const styles = StyleSheet.create({});

export default createAppContainer(TabNavigator);