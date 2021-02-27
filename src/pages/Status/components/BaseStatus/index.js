import React from "react"
import {Container, Title, Text, Stats, } from "./style"
import {ProgressBarAndroid} from "react-native"
import Pokemons from "../../../../services/pokemons.json"


const BaseStatusTabView = ({id}) => (
    <Container>

        <Stats>
            <Text>HP</Text>
            <Text>{Pokemons[id-1].base.HP}</Text>
            <ProgressBarAndroid color="#a3a3a3" width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base.HP)/100} />
        </Stats>


        <Stats>
            <Text>Attack</Text>
            <Text>{Pokemons[id-1].base.Attack} </Text>
            <ProgressBarAndroid color="#a3a3a3" width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base.Attack)/100} />
        </Stats>


        <Stats>
            <Text>Defense</Text>
            <Text>{Pokemons[id-1].base.Defense}</Text>
            <ProgressBarAndroid color="#a3a3a3" width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base.Defense)/100} />
        </Stats>


        <Stats>
            <Text>Sp. Atk</Text>
            <Text>{Pokemons[id-1].base["Sp. Attack"]}</Text>
            <ProgressBarAndroid color="#a3a3a3" width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base["Sp. Attack"])/100} />
        </Stats>


        <Stats>
            <Text>Sp. Def</Text>
            <Text>{Pokemons[id-1].base["Sp. Defense"]}</Text>
            <ProgressBarAndroid color="#a3a3a3" width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base["Sp. Defense"])/100} />
        </Stats>

        <Stats>
            <Text>Speed</Text>
            <Text>{Pokemons[id-1].base.Speed}</Text>
            <ProgressBarAndroid color="#a3a3a3" width="70%" styleAttr="Horizontal"  indeterminate={false} progress={(Pokemons[id-1].base.Speed)/100} />
        </Stats>

    </Container>
  );


  export default BaseStatusTabView
