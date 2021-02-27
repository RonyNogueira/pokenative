import React,{useEffect, useState} from "react"
import {Container, Title, Text, SizeContainer, View, Breeding, BreedingInfo} from "./style"
import Icon from "react-native-vector-icons/FontAwesome5"
import Pokemons from "../../../../services/pokemons.json"



const AboutTabView = ({id}) => {

    const[gender, setGender] = useState([])

useEffect(()=>{

   setGender(splitGender(Pokemons[id-1].profile.gender))

},[])

    const splitGender = (text)=>{
        return text.split(":")
    }

        return(
            <Container>
                
                <Text color={"#303943"}>{Pokemons[id-1].description} </Text>

                <SizeContainer>
                    <View>
                        <Text color={"#303943"}>Height</Text>
                        <Text>{Pokemons[id-1].profile.height} </Text>
                    </View>

                    <View>
                        <Text color={"#303943"}>Weight</Text>
                        <Text>{Pokemons[id-1].profile.weight}</Text>
                    </View>
                </SizeContainer>

                <Breeding>
                    <Title size={"16px"}>Breeding</Title>

                    <BreedingInfo>

                        <Text>Gender (%)</Text>
                        {
                         
                            gender.map((gender, index)=>(
                                    <Text key={index}><Icon name={index==0 ? "mars" : "venus"} size={15} /> {gender} </Text>
                                )) 

                        }
                  
                       
               
                    </BreedingInfo>

                    <BreedingInfo>
                        <Text>Egg Group</Text>
                        <Text>{Pokemons[id-1].profile.egg[0]} </Text>
                    </BreedingInfo>

                </Breeding>
    </Container>
  )}


  export default AboutTabView
