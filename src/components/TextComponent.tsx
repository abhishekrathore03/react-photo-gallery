import type { FC } from "react";
import styled from "styled-components";
import { TextComponentProps } from "../interfaces";

const TextStyle = styled.p<TextComponentProps>`
  width: ${(props) => props.width};
  font-family: "Quicksand", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 12px 0 0;
  font-size: 16px;
  color: #ffffff;
`;

// Extend the styled-component
export const TruncatedText: FC<TextComponentProps> = ({ children }) => (
  <TextStyle width="100%">{children}</TextStyle>
);

export const TextComponent: FC<TextComponentProps> = ({ children }) => (
  <TextStyle >{children}</TextStyle>
);