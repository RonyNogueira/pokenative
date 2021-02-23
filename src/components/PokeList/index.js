import React,{useEffect, useState} from "react"
import {ContainerScroll, Container, Title, PokeCard, PokeTitle, ContentCard, TypeText, Type,PokeImg, PokeNumber, ImgNumber, PokeInfo} from "./style"
import {FlatList,StyleSheet} from "react-native"
import Api from "../../services/api"
import Sprites from "../../services/sprites"
import pokemons from "../../services/pokemons.json"

const PokeList = ()=>{


    return(


        <Container>
                <Title>Pokedex</Title>

                    <FlatList
                   
                        data={pokemons}
                        initialNumToRender={20}
                        keyExtractor={(item)=>item.id.toString()}
                        renderItem={({item}) =>(
                            <ContentCard >

                            <PokeCard  type={item.type[0].toLowerCase()}>

                                <PokeInfo>
                                        <PokeTitle>{item.name.english}</PokeTitle>

                                    <Type>
                                        {
                                            item.type.map((type , index)=>(
                                                    
                                                    <TypeText key={index} type={type.toLowerCase()} >{type} </TypeText>

                                            ))
                                        }
                                        
                                    </Type>
                                </PokeInfo>

                                <ImgNumber>
                                    <PokeImg source={{
                                        uri: Sprites+`${item.name.english.toLowerCase()}.png`}}/>
                                    <PokeNumber>#{item.id}</PokeNumber>
                                </ImgNumber>
                            
                            </PokeCard>


                    </ContentCard>
                        )}
                    
                    />



                        {/* <ContentCard >

                    {
                        pokemons.slice(0,20).map((pokemon, index)=>(

                            <PokeCard key={index} type={pokemon.type[0].toLowerCase()}>

                                <PokeInfo>
                                        <PokeTitle>{pokemon.name.english}</PokeTitle>

                                    <Type>
                                        {
                                            pokemon.type.map((type , index)=>(
                                                    
                                                    <TypeText key={index} type={type.toLowerCase()} >{type} </TypeText>

                                            ))
                                        }
                                        
                                    </Type>
                                </PokeInfo>

                                <ImgNumber>
                                    <PokeImg source={{
                                        uri: Sprites+`${pokemon.name.english.toLowerCase()}.png`}}/>
                                    <PokeNumber>#{pokemon.id}</PokeNumber>
                                </ImgNumber>
                            
                            </PokeCard>


                        ))

                    }

                    </ContentCard> */}

     
             
        </Container>
    )
}





export default PokeList