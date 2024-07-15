import styled from "styled-components";
import { SearchComponent } from "./SearchComponent";
import { DropDownComponenet } from "./DropDownComponent";
import { Dispatch, FC, memo, SetStateAction } from "react";

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`;

export const FilterComponent: FC<{ albumIDs: number[], callback: Dispatch<SetStateAction<number>> }> = memo(({ albumIDs, callback }) => {
    return (
        <Wrapper>
            <SearchComponent key={'search'} />
            <DropDownComponenet albumIDs={albumIDs} callback={callback} />
        </Wrapper>
    );
});