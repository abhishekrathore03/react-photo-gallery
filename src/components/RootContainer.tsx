import styled from "styled-components";
import { PropsWithChildren } from "react";

const StyledDiv = styled.main`
    width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.bg};
`;
export const RootContainer = ({ children }: PropsWithChildren) => <StyledDiv>{children}</ StyledDiv>;