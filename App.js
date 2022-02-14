import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';
import App1_1 from './src/screens/App1_1';
import App1_2 from './src/screens/App1_2';
import App1_3 from './src/screens/App1_3';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
//初始化
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
//版面樣式
export default function App() {
  //功能執行
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      </Stack.Navigator>


      {/* <Tab.Navigator
          screenOptions={() => ({
            tabBarIcon: () =>
              <Ionicons name={'ios-trophy'} size={25} color={'tomato'} />

          })}
        >
          <Tab.Screen name="Home" component={App1_1} />
          <Tab.Screen name="Settings" component={App1_2} />
        </Tab.Navigator> */}
    </NavigationContainer>

  );
}
//樣式表
const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'skyblue', alignItems: 'center', color: 'red'
  },
  titleText1: {
    marginTop: 60, fontSize: 40, color: 'red'
  },
  titleText2: {
    fontSize: 40, color: 'red'
  },
  mainText: {
    color: 'yellow', fontSize: 35
  },
  inputText: {
    height: 60, width: 300, borderRadius: 10, backgroundColor: 'gray', color: 'white',
    fontSize: 30, textAlign: 'center', marginTop: 30
  },
  buttonText: {
    color: 'white', textAlign: 'center', fontSize: 20
  },
  buttonLogin: {
    width: 120, height: 40, backgroundColor: '#00aeef', borderRadius: 20, justifyContent: 'center', margin: 30
  }
});
