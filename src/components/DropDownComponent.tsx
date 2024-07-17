import styled from "styled-components";
import { Dispatch, FC, memo, SetStateAction } from "react";

const SelectComponent = styled.select`
    color:#CCC;
    width: 140px;
    border: none;
    cursor: pointer;
    appearance: none;
    max-width: 200px;
    border-radius: 30px;
    padding: 1rem 4rem 1rem 1rem;
    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center / 1.4em, linear-gradient(to left, #333 3em, #333 3em);
    background-color: #333;
`;
const OptionComponent = styled.option``;

export const DropDownComponenet: FC<{ albumIDs: number[], callback: Dispatch<SetStateAction<number>> }> = memo(({ albumIDs, callback }) => {
    return (
        <SelectComponent onChange={(val: any) => callback(parseInt(val.target.value))} title="AlbumID" >
            <OptionComponent key={`title-option`} value={-1}>Album ID</ OptionComponent>
            {albumIDs?.map((val, index) => <OptionComponent key={`${index}-option`} value={val}>{val}</ OptionComponent>)}
        </ SelectComponent>
    );
})