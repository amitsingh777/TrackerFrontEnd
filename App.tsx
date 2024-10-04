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

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};
const FitnessStack = createNativeStackNavigator();
const FitnessStackScreen = () => {
  return (
    <FitnessStack.Navigator initialRouteName="Gym">
      <FitnessStack.Screen name="Gym" component={Gym} />
    </FitnessStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Fitness" component={FitnessStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
