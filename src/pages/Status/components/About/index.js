import React from "react"
import {Container, Title, Text, SizeContainer, View, Breeding} from "./style"



const AboutTabView = () => (
    <Container>
               <Text color={"#303943"}>Bulbasaur can be seen napping in bright sunlight. 
                There is a seed on its back. By soaking up the sun's rays, 
                the seed grows progressively larger.</Text>

                <SizeContainer>
                    <View>
                        <Text color={"#b3b3b3"}>Height</Text>
                        <Text>2'3.6"(0,70cm)</Text>
                    </View>

                    <View>
                        <Text color={"#b3b3b3"}>Weight</Text>
                        <Text>15.2 lbs (6.9 kg)</Text>
                    </View>
                </SizeContainer>

                <Breeding>
                    <Text>Breeding</Text>
                </Breeding>
    </Container>
  );


  export default AboutTabView
