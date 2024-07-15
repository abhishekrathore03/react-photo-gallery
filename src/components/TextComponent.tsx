import type { FC } from "react";
import styled from "styled-components";
import { TextComponentProps } from "../interfaces";

const TextStyle = styled.p<TextComponentProps>`
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

// Extend the styled-component
export const TruncatedText: FC<TextComponentProps> = ({ children }) => (
  <TextStyle width="100%">{children}</TextStyle>
);

export const TextComponent: FC<TextComponentProps> = ({ children }) => (
  <TextStyle >{children}</TextStyle>
);