import styled from "styled-components"

export const Container = styled.View`
    flex:1;
    background-color:#fff;
    padding:15px;
    padding-bottom:60px;
    height:100%;
    
`

export const Title = styled.Text`
    font-size:${({size})=>(size ? size : "14px")};
    font-weight:bold;
    color:#34495e;
`

export const Text = styled.Text`
    font-size:14px;
    color:${({color}) => (color ? color : "#303943")};
    line-height:22px;
`

export const SizeContainer = styled.View`
    background-color:#fff;
    padding:20px 40px;
    margin-top:15px;
    border-radius:10px;
    border-width: 0px;
    elevation: 5;
    flex-direction:row;
    justify-content:space-between;
`

export const Breeding = styled.View`
    margin-top:25px;

`
export const BreedingInfo = styled.View`
    flex-direction:row;
    justify-content:space-between;
    padding-right:80px;
    padding-top:10px;
    
    
`

export const View = styled.View``