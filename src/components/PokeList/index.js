import React,{useEffect, useState} from "react"
import { Container, PokeCard, PokeTitle, ContentCard, TypeText, Type,PokeImg, PokeNumber, ImgNumber, PokeInfo,FlatList} from "./style"
import Sprites from "../../services/sprites"
import pokemons from "../../services/pokemons.json"


const PokeList = ({navigation})=>{


    return(


        <Container>
                    <FlatList
                   
                        data={pokemons}
                        keyExtractor={(item)=>item.id.toString()}
                        renderItem={({item}) =>(
                            
                    
                            <ContentCard onPress={() => navigation.push('Status',{itemId:item.id})}>

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
             
        </Container>
    )
}





export default PokeList