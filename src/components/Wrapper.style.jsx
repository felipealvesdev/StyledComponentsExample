import styled from "styled-components"

export const Wrapper = styled.div`
    width: 80vw;
    height: 100vh;
    background-color: grey;
    display: flex;
    flex-direction: ${(prop) => prop.flexDirection? prop.flexDirection : "column"};
    justify-content: ${(prop) => prop.justifyContent? prop.justifyContent : "flex-start"};
    align-items: center;

    & a {
        text-decoration: none;
        color: inherit;
    }
` 