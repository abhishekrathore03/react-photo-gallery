import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FC, memo, MouseEvent, PropsWithChildren } from "react";

const ButtonStyle = styled.button`
  margin: 16px;
  color: #BF4F74;
  font-size: 1em;
  padding: 4px 16px;
  background: white;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  // background-image: conic-gradient(from 180deg at 50% 50%, #3fdcf7 0deg, #1890ff 51.43deg, #6813cb 102.86deg, #ff003d 154.29deg, #ff8a00 205.71deg, #ffd600 257.14deg, #67be23 308.57deg, #3fdcf7 1turn);
`;

const PillStyle = styled(ButtonStyle)`
  border: 0px;
  outline: 0px;
  height: 32px;
  cursor: pointer;
  min-width: 32px;
  margin: 0px 3px;
  padding: 0px 6px;
  text-align: center;
  border-radius: 16px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &.dots:hover {
    cursor: default;
    background-color: transparent;
  }

  &.selected {
    background-color: rgba(255, 255, 255, 0.16);
  }
  
  &.disabled {
    opacity: 0.38;
    cursor: default;
  }
  
  &.disabled:hover {
    opacity: 0.38;
    cursor: default;
    background-color: transparent;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

export const ButtonComponent: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  return <ButtonStyle title={"back"} onClick={() => navigate(`/`)}>{children}</ButtonStyle>;
}

export const PillComponent: FC<{ className: string, value: number | string, onClick: (e: MouseEvent<HTMLButtonElement>) => void }> = memo(({ className, value, onClick }) => {
  return <PillStyle title={String(value)} className={className} onClick={onClick} id={String(value)}>{value}</PillStyle>
})