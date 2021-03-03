import React, {useState, useEffect} from "react"
import {Dimensions, ActivityIndicator} from "react-native"
import {Container, ContanierInfo, Info, InfoType, Title, Number, Type, Img, ContainerDescription, LoadView} from "./style"
import Poke from "../../assets/1.png"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AboutTabView from "./components/About/index"
import BaseStatusTabView from "./components/BaseStatus/index"
import Evolution from "./components/Evolution/index"
import Api from "../../services/api"

const initialLayout = { width: Dimensions.get('window').width };




const Status = ({route})=>{
  const [pokemon, setPokemon] = useState({})
  const [load, setLoad] = useState(true)
    
 useEffect(()=>{

    getPokemon()

},[])


 const { itemId } = route.params;


    const getPokemon = async ()=>{
       
      try {         
            const {data} = await Api.get(itemId.toString())
            setPokemon(data)
            setLoad(false)
           
      } catch (error) {
          
      }
  
    }


    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'About', title: 'About' },
      { key: 'BaseStats', title: 'Base Stats' },
      { key: 'Evolution', title: 'Evolution' },
    ]);


      const _renderScene = ({route})=>{
        switch(route.key){
          case 'About':
            return pokemon.id ? <AboutTabView id={pokemon.id} /> : <AboutTabView id={1} />;
            
          
          case 'BaseStats': 
            return pokemon.id ? <BaseStatusTabView id={pokemon.id}/>: <BaseStatusTabView id={1}/>;
          
          case 'Evolution': 
            return pokemon.id ? <Evolution id={pokemon.id} /> : <Evolution id={1} />;
          
          default : return null
        }
      }

      const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#95a5a6' }}
          style={{ backgroundColor: '#fff', elevation:0}}
          labelStyle={{fontWeight: "bold"}}
          activeColor={"#303943"}
          inactiveColor={"#c3c3c3"}
        />
      );


   

    return(

        <>
      { load ? <LoadView>
                  <Title> <ActivityIndicator size={60} color="#fd7d24" /> </Title>
              </LoadView> :
         <Container type={pokemon.types ? pokemon.types[0].type.name : "normal"}>
            {
               
                

                    <ContanierInfo>

                        <Info>
                            <Title>{pokemon.name} </Title>
                            <Number>#{pokemon.id} </Number>
                        </Info>
                        <InfoType>
                            {
                              pokemon.types ? 
                              pokemon.types.map((type, index)=>(

                                <Type key={index}>{type.type.name} </Type>


                              ))
                              : null
                            }
    
                        </InfoType>
                          {   pokemon.sprites ?
                              <Img source={{uri:pokemon.sprites.other['official-artwork'].front_default}} />
                              : null
                          }
                  
                    </ContanierInfo>

      

            }

            <ContainerDescription>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={_renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    renderTabBar={renderTabBar}
                    
                   
                />
            </ContainerDescription>
        </Container> 
      }
        </>

    )


}

export default Status