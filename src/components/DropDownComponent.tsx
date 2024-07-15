import styled from "styled-components";
import { Dispatch, FC, memo, SetStateAction } from "react";

const SelectComponent = styled.select`
    float: right;
    padding: 10px;
    max-width: 200px;
    border-radius: 5px;
    background-color: #333;
`;
const OptionComponent = styled.option``;

export const DropDownComponenet: FC<{ albumIDs: number[], callback: Dispatch<SetStateAction<number>> }> = memo(({ albumIDs, callback }) => {
    return (
        <SelectComponent onChange={(val: any) => callback(parseInt(val.target.value))} title="AlbumID" >
            <OptionComponent key={`title-option`} value={-1}>Select Album ID</ OptionComponent>
            {albumIDs?.map((val, index) => <OptionComponent key={`${index}-option`} value={val}>{val}</ OptionComponent>)}
        </ SelectComponent>
    );
})