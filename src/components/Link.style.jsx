import styled from "styled-components";

export const Link = styled.a`
    width: 250px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: tomato;
    margin: 0px 20px;

    transition: all 300ms ease-in-out;

    &:hover {
        background-color: #ffaa9b;
        cursor: pointer;
    }


`