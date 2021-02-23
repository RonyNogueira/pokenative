import React from "react"
import {Button} from "react-native"
import {Container} from "./style"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Home = ({navigation})=>{
    return(
        <Container>

        <Button
            title="Go to Pokelist"
            onPress={() => navigation.push('PokeList')}
        />

        </Container>
    )

}


export default Home;