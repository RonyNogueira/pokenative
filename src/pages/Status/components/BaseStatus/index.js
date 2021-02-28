import React from "react"
import {Container, Title, Text, Stats, Number } from "./style"
import {ProgressBarAndroid} from "react-native"
import Pokemons from "../../../../services/pokemons.json"


const BaseStatusTabView = ({id}) => (
    <Container>

        <Stats>
            <Number>
                <Text>HP</Text>
                <Text>{Pokemons[id-1].base.HP}</Text>
            </Number>
            <ProgressBarAndroid color={Pokemons[id-1].base.HP >=50? "#4BC07A" :"#FB6C6C"} width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base.HP)/100} />

        </Stats>


        <Stats>
            <Number>
                <Text>Attack</Text>
                <Text>{Pokemons[id-1].base.Attack} </Text>
            </Number>
            <ProgressBarAndroid color={Pokemons[id-1].base.Attack >=50? "#4BC07A" :"#FB6C6C"} width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base.Attack)/100} />
        </Stats>


        <Stats>
            <Number>
                <Text>Defense</Text>
                <Text>{Pokemons[id-1].base.Defense}</Text>
            </Number>
            <ProgressBarAndroid color={Pokemons[id-1].base.Defense >=50? "#4BC07A" :"#FB6C6C"} width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base.Defense)/100} />
        </Stats>


        <Stats>
            <Number>
                <Text>Sp. Atk</Text>
                <Text>{Pokemons[id-1].base["Sp. Attack"]}</Text>
            </Number>
            <ProgressBarAndroid color={Pokemons[id-1].base["Sp. Attack"] >=50? "#4BC07A" :"#FB6C6C"} width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base["Sp. Attack"])/100} />
        </Stats>


        <Stats>
            <Number>
                <Text>Sp. Def</Text>
                <Text>{Pokemons[id-1].base["Sp. Defense"]}</Text>
            </Number>
            <ProgressBarAndroid color={Pokemons[id-1].base["Sp. Defense"] >=50? "#4BC07A" :"#FB6C6C"} width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base["Sp. Defense"])/100} />
        </Stats>

        <Stats>
            <Number>
                <Text>Speed</Text>
                <Text>{Pokemons[id-1].base.Speed}</Text>
            </Number>
            <ProgressBarAndroid color={Pokemons[id-1].base.Speed >=50? "#4BC07A" :"#FB6C6C"} width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base.Speed)/100} />
        </Stats>

    </Container>
  );


  export default BaseStatusTabView
