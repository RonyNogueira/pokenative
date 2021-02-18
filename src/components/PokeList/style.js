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
    width:47.3%;
    margin:5px;
    height:130px;
    border-bottom-color: #46D0A7;
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
    background-color:#46D0A7;
    border-radius:20px;
    color:#fff;
    text-align:center;
    width:80px;
`


export const PokeImg = styled.Image``

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