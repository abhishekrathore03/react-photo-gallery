import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledDiv = styled.main`
    background-color: ${props => props.theme.bg};
    width: 100%;
    justify-content: center;
    align-items: center;
    align-self: center;
`;
export const RootContainer = ({ children }: PropsWithChildren) => <StyledDiv>{children}</ StyledDiv>;