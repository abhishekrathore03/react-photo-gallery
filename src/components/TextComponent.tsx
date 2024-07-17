import type { FC } from "react";
import styled from "styled-components";
import { TextComponentProps } from "../interfaces";

const TextStyle = styled.p<TextComponentProps>`
  width: 90%;
  flex-grow: 1;
  padding: 6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin: 12px 0 0;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: capitalize;
  font-family: Quicksand, sans-serif;
`;


// TODO: Extend the styled-component
export const TruncatedText: FC<TextComponentProps> = ({ children }) => <TextStyle>{children}</TextStyle>

export const TextComponent: FC<TextComponentProps> = ({ children }) => (
  <TextStyle >{children}</TextStyle>
);