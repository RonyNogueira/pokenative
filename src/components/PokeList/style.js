import styled from "styled-components/native"



export const Container = styled.View`
  flex:1;
  

`


export const ContainerScroll = styled.ScrollView.attrs({

})`
    background-color:#f7f4f4;
    padding-top:10px;
     
`

export const Title = styled.Text`
    font-size:35px;
    padding:30px;
    font-weight:bold;
    color:#303943;
    border :1px solid #c3c3c3;

`


export const PokeCard = styled.View`

    background-color:#fff;
    width:100%;
    margin:5px;
    height:130px;
    border-bottom-color: ${({type}) => 
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
        type === 'steal' ? '#4b6584' : '#808e9b'} ;
    border-bottom-width:5px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
   

`


export const PokeTitle = styled.Text`
   padding-bottom:10px;
   color:#616161;
   font-size:15px;
   font-weight:bold;
   text-transform:capitalize;
    
`

export const Type = styled.View`

    justify-content:center;

`

export const ImgNumber = styled.View`
    align-items:center;
    padding-right:5px;
`

export const PokeNumber = styled.Text`
   color:#616161;
   font-size:15px;
`

export const TypeText = styled.Text`
    padding:0px;
    margin-bottom:5px;
    background-color:${({type}) => 
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
        type === 'steal' ? '#4b6584' : '#808e9b'} ;
    border-radius:20px;
    color:#fff;
    text-align:center;
    width:80px;
`


export const PokeImg = styled.Image.attrs({
    resizeMode:"contain"
})`
    width:100px;
    height:100px;
`

export const PokeInfo = styled.View`
    height:100%;
    padding: 10px;
    padding-right:0;
    
`

export const ContentCard = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
    align-items:flex-start;
    padding-bottom:20px;
    
`