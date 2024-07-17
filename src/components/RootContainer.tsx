import styled from "styled-components";
import { PropsWithChildren } from "react";

const StyledDiv = styled.main`
    width: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.bg};
`;
export const RootContainer = ({ children }: PropsWithChildren) => <StyledDiv>{children}</ StyledDiv>;