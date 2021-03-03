import React, {useState, useEffect} from "react"
import {Container, Image, Title, Name, level, EvoView, Level, View} from "./style"
import Um from "../../../../assets/1.png"
import Dois from "../../../../assets/2.png"
import Tres from "../../../../assets/3.png"
import Pokemons from "../../../../services/pokemons.json"


const Evolution = ({id}) =>{
 const [evolution, setEvolution] = useState([])
  useEffect(()=>{



   },[])
return (
    <Container>

         <Title>Em desenvolvimento</Title> 
{/* 
         <EvoView>


                  <Level>Lvl 16</Level>

                  <View>
                        <Image source={Dois} />
                        <Name>Bulbasaur</Name>
                  </View>

                  <Level>Lvl 34</Level>

                  <View>
                        <Image source={Tres} />
                        <Name>Bulbasaur</Name>
                  </View>

         </EvoView> */}

    </Container>
  );
  }


  export default Evolution
