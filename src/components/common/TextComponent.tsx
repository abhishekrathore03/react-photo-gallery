import type { FC } from "react";
import styled from "styled-components";
import { ITextComponentProps } from "../../interfaces";

const TextStyle = styled.p<ITextComponentProps>`
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

export const TextComponent: FC<ITextComponentProps> = ({ children }) => <TextStyle>{children}</TextStyle>;