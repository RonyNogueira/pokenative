import React from 'react';
import { StatusBar } from 'react-native';
import Header from "./src/components/Header"
import PokeList from "./src/components/PokeList"

export default function App() {
  return (
    <React.Fragment>  
      <Header/>
      <PokeList/>
      <StatusBar style="auto"/>
    </React.Fragment>
  );
}

