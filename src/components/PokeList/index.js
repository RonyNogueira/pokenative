import React,{useEffect, useState} from "react"
import {ContainerScroll, Container, Title, PokeCard, PokeTitle, ContentCard, TypeText, Type,PokeImg, PokeNumber, ImgNumber, PokeInfo} from "./style"
import Bulba from "../../assets/bulba.png"
import Ivysaur from "../../assets/ivysaur.png"
import Venosaur from "../../assets/venusaur.png"
import Charmander from "../../assets/charmander.png"
import Charmeleon from "../../assets/charmeleon.png"
import Charizard from "../../assets/charizard.png"
import Squirtle from "../../assets/squirtle.png"
import Wartortle from "../../assets/wartortle.png"
import Blastoise from "../../assets/blastoise.png"
import Pikachu from "../../assets/pikachu.png"

import Api from "../../services/api"


const PokeList = ()=>{
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{

        const listAllPokemons = async ()=>{
           
            const fill = []

            try {
                for (let i = 1; i <=150 ;i++) {
                    const {data} = await Api.get(i.toString())
                    fill.push(data)
                    
                } 
                setPokemons(fill) 
                           
                
            } catch (error) {
                console.error(error)
            }
           
      
        }

        listAllPokemons()
     


    },[])

    return(


        <Container>
                <Title>Pokedex</Title>

                    <ContainerScroll>
                        <ContentCard >

                    {
                        pokemons.map((pokemon, index)=>(

                            <PokeCard key={index} type={pokemon.types[0].type.name}>
                                <PokeInfo>
                                        <PokeTitle>{pokemon.name}</PokeTitle>

                                    <Type>
                                        {
                                            pokemon.types.map((type , index)=>(
                                                    
                                                    <TypeText key={index} type={pokemon.types[0].type.name} >{type.type.name} </TypeText>

                                            ))
                                        }
                                        
                                    </Type>
                                </PokeInfo>

                                <ImgNumber>
                                    <PokeImg source={{uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}}/>
                                    <PokeNumber>#{pokemon.id}</PokeNumber>
                                </ImgNumber>
                            
                            </PokeCard>


                        ))

                    }

                    </ContentCard>

     
                </ContainerScroll>
        </Container>
    )
}


export default PokeList