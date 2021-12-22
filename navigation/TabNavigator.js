import * as React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/Home';
import Calculate from '../screens/Calculate';

const TabNavigator = createBottomTabNavigator({
    HomeScreen: Home,
    CalculateScreen: Calculate
});

export default createAppContainer(TabNavigator);