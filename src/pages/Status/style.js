import styled from "styled-components"


export const Container = styled.ScrollView`
    flex:1;
    background-color:${({type})=> 
        type === 'grass' ? "#48D0B0" : 
        type === 'fire' ? "#fd7d24" : 
        type === 'water' ? "#77BDFE" :
        type === 'electric' ? '#FFCE4B' : 
        type === 'bug' ? '#05c46b' : 
        type === 'poison' ? '#7d5fff' : 
        type === 'ground' ? '#ffa801' : 
        type === 'fairy' ? '#ef5777' : 
        type === 'fighting' ? '#ff793f' : 
        type === 'psychic' ? '#f366b9' : 
        type === 'rock' ? '#ffb142' : 
        type === 'ghost' ? '#3c40c6' : 
        type === 'ice' ? '#00d8d6' : 
        type === 'dragon' ? '#f16e57' :
        type === 'dark' ? '#3d3d3d' : 
        type === 'flying' ? '#3dc7ef' :
        type === 'steal' ? '#4b6584' : '#808e9b'}  ;
`

export const ContanierInfo= styled.View`

    height:auto;
    
`


export const Info = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 20px ;
    

`

export const InfoType = styled.View`
    flex-direction:row;
    align-items:center;
    padding:0 20px ;
    

`
export const Title = styled.Text`
    font-size:30px;
    font-weight:bold;
    color:#fff;
    text-transform:capitalize;
`

export const Number = styled.Text`
    color:#fff;
    font-size:20px;
    font-weight:bold;

`

export const Type = styled.Text`
    color:#fff;
    font-size:15px;
    padding:0 15px;
    background-color:rgba(255,255,255,0.3);
    border-radius:20px;
    margin-right:10px;
    
`

export const Img = styled.Image`
    align-self:center;
    width:220px;
    height:220px;

`

export const ContainerDescription = styled.View`
    background-color:#fff;
    flex:1;

`

export const LoadView = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`



