/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/page/Home';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Gym from './src/page/Fitness/Gym';
import Login from './src/page/Auth/Login';
import Signup from './src/page/Auth/Signup';
import {RootStackParamList} from './src/types';

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};
const FitnessStack = createNativeStackNavigator<RootStackParamList>();
const FitnessStackScreen = () => {
  return (
    <FitnessStack.Navigator initialRouteName="Gym">
      <FitnessStack.Screen name="Gym" component={Gym} />
    </FitnessStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Root = createNativeStackNavigator<RootStackParamList>();
const TabScreens = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeTab" component={HomeStackScreen} />
      <Tab.Screen name="FitnessTab" component={FitnessStackScreen} />
    </Tab.Navigator>
  );
};
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen name="Root" component={TabScreens} />
        <Root.Screen name="Login" component={Login} />
        <Root.Screen name="Signup" component={Signup} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

export default App;
