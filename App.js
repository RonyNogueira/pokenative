import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'react-native';
import Header from "./src/components/Header"
import PokeList from "./src/components/PokeList"
import Home from "./src/pages/Home/Index"
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PokeList" component={PokeList} />
      </Stack.Navigator>
   </NavigationContainer>
   <StatusBar style="auto"/>
     </>

  );
}

