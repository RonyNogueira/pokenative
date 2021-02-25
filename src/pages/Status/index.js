import React, {useState} from "react"
import {Dimensions} from "react-native"
import {Container, ContanierInfo, Info, InfoType, Title, Number, Type, Img, ContainerDescription} from "./style"
import Poke from "../../assets/poke.png"
import {ProgressBarAndroid} from "react-native"
import { TabView, SceneMap } from 'react-native-tab-view';
import AboutTabView from "./components/About/index"
import BaseStatusTabView from "./components/BaseStatus/index"


const initialLayout = { width: Dimensions.get('window').width };


const Status = ({route})=>{

    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'About', title: 'About' },
      { key: 'BaseStats', title: 'Base Stats' },
     
    ]);

    const renderScene = SceneMap({
        About: AboutTabView,
        BaseStats: BaseStatusTabView,
        
      });
    // const { itemId } = route.params;

    return(
        <Container>
            <ContanierInfo>
                <Info>
                    <Title>Bulbasaur</Title>
                    <Number>#001</Number>
                </Info>
                <InfoType>

                    <Type>Grass</Type>
                    <Type>Grass</Type>

                </InfoType>

                <Img source={Poke} />
            </ContanierInfo>

            <ContainerDescription>
                <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.5} />
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                />
            </ContainerDescription>
        </Container>
    )


}

export default Status