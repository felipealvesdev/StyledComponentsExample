import styled from "styled-components";
import ButtonStyled from "./Button";
import { theme } from "../Theme";

export const Button = styled.button`
    background-color: ${(prop)=> prop.backgroundColor? prop.backgroundColor : "lightyellow"};
    width: ${(prop) => `${prop.width ? prop.width : 120}px`};
    height: ${({theme}) => theme.size.xxl};
    transition: all 300ms ease;
    border: none;
    margin: 10px 20px;


    &:hover {
        scale: 1.2;
        color: #fff;
        cursor: pointer;
        background-color: lightblue;
        box-shadow: 0px 0px 10px 10px #999999;
    }
    &:active {
        scale:0.9;
        border-radius: 15px;
    }
`

export const Button2 = styled(ButtonStyled)`
    background-color: ${({theme}) => theme.colors.secondary};
    width: 120px;
    height:60px;

`