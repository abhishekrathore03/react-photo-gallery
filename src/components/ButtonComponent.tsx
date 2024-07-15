import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FC, memo, MouseEvent, PropsWithChildren } from "react";

const ButtonStyle = styled.button`
  background: white;
  color: #BF4F74;
  font-size: 1em;
  margin: 16px;
  padding: 4px 16px;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const PillStyle = styled(ButtonStyle)`
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }

    &.selected {
      background-color: rgba(0, 0, 0, 0.08);
    }

    &.disabled {
      pointer-events: none;

      .arrow::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
  }
`;

const ArrowStyle = styled(PillStyle)`
    &::before {
      position: relative;
      /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
      content: '';
      /* By using an em scale, the arrows will size with the font */
      display: inline-block;
      width: 0.4em;
      height: 0.4em;
      border-right: 0.12em solid rgba(0, 0, 0, 0.87);
      border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    }

    &.left {
      transform: rotate(-135deg) translate(-50%);
    }

    &.right {
      transform: rotate(45deg);
    }

    &.disabled {
      pointer-events: none;

      .arrow::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
`;

export const ButtonComponent: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  return <ButtonStyle onClick={() => navigate(`/`)}>{children}</ButtonStyle>;
}

export const PillComponent: FC<{ className: string, value: number | string, onClick: (e: MouseEvent<HTMLButtonElement>) => void }> = memo(({ className, value, onClick }) => {
  return <PillStyle className={className} onClick={onClick} id={String(value)}>{value}</PillStyle>
})

export const ArrowButton: FC<{ className: string, id: string, onClick: (e: MouseEvent<HTMLButtonElement>) => void }> = memo(({ className, onClick, id }) => {
  return <ArrowStyle className={className} onClick={onClick} id={id} />
})