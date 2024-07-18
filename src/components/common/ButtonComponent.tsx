import { memo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import type { FC, PropsWithChildren } from "react";
import type { IPillComponentProps } from "../../interfaces";

const ButtonStyle = styled.div`
  width: 80px;
  color:white;
  display: flex;
  cursor: pointer;
  margin: auto 20px;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #fff;
  align-self: flex-start;
  background: transparent;
  padding: 1px 5px 1px 5px;
  justify-content: space-around;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const PillStyle = styled.button`
  border: 0px;
  outline: 0px;
  height: 32px;
  font-size: 1em;
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

const SvgStyle = styled.svg`
  filter: invert(100%);
`;

/**
 * Back Button for the Big Image page
 */
export const ButtonComponent: FC<PropsWithChildren> = () => {
  const navigate = useNavigate();
  return <ButtonStyle onClick={() => navigate(`/`)} >
    <SvgStyle width={10} height={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left" /></SvgStyle>
    <span>Back</span>
  </ButtonStyle>
}

/**
 * Pagination Button
 * className: To set button enable, disable & Dots
 * value: the value to be shown on button e.g. page number of dots
 * onClick: click callback
 */
export const PillComponent: FC<IPillComponentProps> = memo(({ className, value, onClick }) => {
  return <PillStyle title={String(value)} className={className} onClick={onClick} id={String(value)}>{value}</PillStyle>
})