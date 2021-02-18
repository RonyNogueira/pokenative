import React from "react"
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





const PokeList = ()=>{
    return(
        <Container>
                <Title>Pokedex</Title>
                <ContainerScroll>
                    <ContentCard>

                        <PokeCard>
                            <PokeInfo>
                                <PokeTitle>Bulbassaur</PokeTitle>

                                <Type>
                                    <TypeText>Grass</TypeText>
                                    <TypeText>Poison</TypeText>
                                </Type>
                            </PokeInfo>

                            <ImgNumber>
                                <PokeImg source={Bulba}/>
                                <PokeNumber>#001</PokeNumber>
                            </ImgNumber>
                         
                        </PokeCard>

                        <PokeCard>
                            <PokeInfo>
                                <PokeTitle>Ivysaur</PokeTitle>
                                <Type>
                                    <TypeText>Grass</TypeText>
                                    <TypeText>Poison</TypeText>
                                </Type>
                            </PokeInfo>

                            <ImgNumber>
                                <PokeImg source={Ivysaur}/>
                                <PokeNumber>#002</PokeNumber>
                            </ImgNumber>
                         
                        </PokeCard>

                        <PokeCard>
                            <PokeInfo>
                                <PokeTitle>Venosaur</PokeTitle>
                                <Type>
                                    <TypeText>Grass</TypeText>
                                    <TypeText>Poison</TypeText>
                                </Type>
                            </PokeInfo>
                            <ImgNumber>
                                <PokeImg source={Venosaur}/>
                                <PokeNumber>#003</PokeNumber>
                            </ImgNumber>
                         
                        </PokeCard>


                        
                        <PokeCard>

                            <PokeInfo>
                            <PokeTitle>Charmander</PokeTitle>

                                <Type>
                                    <TypeText>Fire</TypeText>

                                </Type>
                            </PokeInfo>

                            <ImgNumber>
                                <PokeImg source={Charmander}/>
                                <PokeNumber>#004</PokeNumber>
                            </ImgNumber>
                         
                        </PokeCard>


                        <PokeCard>

                            <PokeInfo>
                            <PokeTitle>Charmeleon</PokeTitle>

                                <Type>
                                    <TypeText>Fire</TypeText>

                                </Type>
                            </PokeInfo>

                            <ImgNumber>
                                <PokeImg source={Charmeleon}/>
                                <PokeNumber>#005</PokeNumber>
                            </ImgNumber>
                         
                        </PokeCard>

                        <PokeCard>

                            <PokeInfo>
                            <PokeTitle>Charizard</PokeTitle>

                                <Type>
                                    <TypeText>Fire</TypeText>
                                    <TypeText>Flying</TypeText>
                                </Type>
                            </PokeInfo>

                            <ImgNumber>
                                <PokeImg source={Charizard}/>
                                <PokeNumber>#006</PokeNumber>
                            </ImgNumber>
                         
                        </PokeCard>

                        <PokeCard>

                            <PokeInfo>
                            <PokeTitle>Squirtle</PokeTitle>

                                <Type>
                                    <TypeText>Water</TypeText>
                                </Type>
                            </PokeInfo>

                            <ImgNumber>
                                <PokeImg source={Squirtle}/>
                                <PokeNumber>#007</PokeNumber>
                            </ImgNumber>
                         
                        </PokeCard>


                        <PokeCard>

                            <PokeInfo>
                            <PokeTitle>Wartortle</PokeTitle>

                                <Type>
                                    <TypeText>Water</TypeText>
                                </Type>
                            </PokeInfo>

                            <ImgNumber>
                                <PokeImg source={Wartortle}/>
                                <PokeNumber>#008</PokeNumber>
                            </ImgNumber>
                         
                        </PokeCard>

                        <PokeCard>

                            <PokeInfo>
                            <PokeTitle>Blastoise</PokeTitle>

                                <Type>
                                    <TypeText>Water</TypeText>
                                </Type>
                            </PokeInfo>

                            <ImgNumber>
                                <PokeImg source={Blastoise}/>
                                <PokeNumber>#009</PokeNumber>
                            </ImgNumber>
                         
                        </PokeCard>

                        <PokeCard>

                            <PokeInfo>
                            <PokeTitle>Pikachu</PokeTitle>

                                <Type>
                                    <TypeText>Electric</TypeText>
                                </Type>
                            </PokeInfo>

                            <ImgNumber>
                                <PokeImg source={Pikachu}/>
                                <PokeNumber>#010</PokeNumber>
                            </ImgNumber>
                         
                        </PokeCard>
                   

                    </ContentCard>
                </ContainerScroll>
        </Container>
    )
}


export default PokeList