import type { FC } from "react";
import styled from "styled-components";
import { TextComponentProps } from "../interfaces";

const TextStyle = styled.p<TextComponentProps>`
-webkit-box-flex: 1;
    flex-grow: 1;
    padding: 12px 0px 12px 16px;
    color: rgb(255, 255, 255);

  color: #ffffff;
  font-size: 16px;
  margin: 12px 0 0;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: ${(props) => props.width};
  font-family: "Quicksand", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`;

// const Wrapper = styled.section`
//     position: absolute;
//     left: 0px;
//     right: 0px;
//     background: rgba(0, 0, 0, 0.5);
//     display: flex;
//     -webkit-box-align: center;
//     align-items: center;
//     font-family: Roboto, Helvetica, Arial, sans-serif;
//     bottom: 0px;
// `;


// Extend the styled-component
export const TruncatedText: FC<TextComponentProps> = ({ children }) => {
  return (
    // <Wrapper>
      <TextStyle width="100%">{children}</TextStyle>
    // </Wrapper>
  )
}

export const TextComponent: FC<TextComponentProps> = ({ children }) => (
  <TextStyle >{children}</TextStyle>
);