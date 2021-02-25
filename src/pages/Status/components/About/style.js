import styled from "styled-components"

export const Container = styled.View`
    flex:1;
    background-color:#fff;
    padding:15px;
`

export const Title = styled.Text`
    font-size:40px;
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
    padding:20px;
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

export const View = styled.View``