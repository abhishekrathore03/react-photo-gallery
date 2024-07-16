import styled from "styled-components";
import { SearchComponent } from "./SearchComponent";
import { DropDownComponenet } from "./DropDownComponent";
import { Dispatch, FC, memo, SetStateAction } from "react";

const Wrapper = styled.section`
    display: flex;
    margin-top:30px;
    align-items:center;
    justify-content:center;
`;

export const FilterComponent: FC<{ albumIDs: number[], callback: Dispatch<SetStateAction<number>> }> = memo(({ albumIDs, callback }) => {
    return (
        <Wrapper>
            <SearchComponent key={'search'} />
            <DropDownComponenet albumIDs={albumIDs} callback={callback} />
        </Wrapper>
    );
});