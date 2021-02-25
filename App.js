import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'react-native';
import Header from "./src/components/Header"
import PokeList from "./src/components/PokeList"
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Status from "./src/pages/Status"

const Stack = createStackNavigator();


export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Status">
        <Stack.Screen name="PokeDex" component={PokeList} />
        <Stack.Screen name="Status" component={Status}/>
      </Stack.Navigator>
   </NavigationContainer>
   <StatusBar style="auto"/>
     </>

  );
}

