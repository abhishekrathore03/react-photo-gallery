import styled from "styled-components";
import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

const ButtonStyle = styled.button`
  background: white;
  color: #BF4F74;
  font-size: 1em;
  margin: 16px;
  padding: 4px 16px;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

export const ButtonComponent: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  return <ButtonStyle onClick={() => navigate(`/`)}>{children}</ButtonStyle>;
}