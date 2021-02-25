import React from "react"
import {Container,ActionButtom,Pokeball} from "./style"
import Icon from "react-native-vector-icons/FontAwesome5"
import pokeImg from "../../assets/pokeball.png"

const Header = ()=>{
    return(
        <Container>
            <Pokeball source={pokeImg} />
            <ActionButtom>
                <Icon name="arrow-alt-circle-left" size={26} color="#fff" />
            </ActionButtom>

            <ActionButtom>
                <Icon name="bars" size={26} color="#fff" />
            </ActionButtom>

        </Container>
    )

}


export default Header;