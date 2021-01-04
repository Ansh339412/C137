import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './MainScreen';
import DetailsScreen from './Details';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

export default function App() {
  return (
    <AppContainer/>
  );
}

const appStackNavigator = createStackNavigator(
  {
    Home:{
      screen:MainScreen,
      navigationOptions:{headerShown:false}
    },
    Details:{
      screen:DetailsScreen
    }
  },
  {
    initialRouteName:"Home"
  }
)

const AppContainer = createAppContainer(appStackNavigator);

