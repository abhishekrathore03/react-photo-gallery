import styled from "styled-components";
import { SearchComponent } from "./SearchComponent";
import { DropDownComponenet } from "./DropDownComponent";
import { Dispatch, FC, memo, SetStateAction } from "react";

const Wrapper = styled.section`
    gap: 50px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const FilterComponent: FC<{ albumIDs: number[], callback: Dispatch<SetStateAction<number>> }> = memo(({ albumIDs, callback }) => {
    return (
        <Wrapper>
            <DropDownComponenet albumIDs={albumIDs} callback={callback} />
            <SearchComponent key={'search'} />
        </Wrapper>
    );
});