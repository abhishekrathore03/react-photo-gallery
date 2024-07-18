import { FC, memo } from "react";
import styled from "styled-components";
import { IDropDownProps } from "../../interfaces";
import { SearchComponent } from "./SearchComponent";
import { DropDownComponenet } from "./DropDownComponent";

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

/**
 * This is the parent component for Filter related items e.g. Search and DropDown 
 */
export const FilterComponent: FC<IDropDownProps> = memo(({ albumIDs, callback }) => {
    return (
        <Wrapper>
            <DropDownComponenet albumIDs={albumIDs} callback={callback} />
            <SearchComponent key={'search'} />
        </Wrapper>
    );
});