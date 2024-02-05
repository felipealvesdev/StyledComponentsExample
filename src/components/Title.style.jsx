import styled from "styled-components";

export const Title = styled.h1`
  color: ${(prop) => prop.color};
  background-color: #777;
  width: ${(prop) => `${prop.width? prop.width : 200}px`};
  height: ${(prop) => `${prop.height? prop.width : 100}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${(prop) => `${prop.fontSize}px`};
  margin-top: 20px;
  font-family: "Times";

  & span {
    font-size: ${(prop) => `${prop.fontSize / 2}px`};
    color: #fff;
  }
`;

export const TitleSmall = styled(Title)`
  color: coral;
  font-size: ${(prop) => `${prop.fontSize}px`};

;`