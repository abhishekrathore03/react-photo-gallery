import styled from "styled-components";
import { Dispatch, FC, memo, SetStateAction } from "react";

const SelectComponent = styled.select`
    color: white;
    width: 140px;
    border: none;
    padding: 13px;
    appearance: none;
    max-width: 200px;
    border-radius: 30px;
    background-size: 20px;
    background-color: #333;
    background-position-y: 8px;
    background-position-x: 97%;
    background-repeat: no-repeat;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nO3UPUpDQRTF8V8sHikCNoL2WYBVSq3cgqVttuAW3EPK9IJFymgTIRZZg42NgqUIIhoeTCHDy3ujmRTC/OE0wz3nMl+XQqFQyMQtVhjmCgxZK8zbir6DXnGWoekpXn7kdjau9YnLLZqO8RFlbmQZFdaaoJJOFTxxzrLNNMB1g+keRwlND3DX4J9hv8vcC0f8FZmfMGrxHeMx8tQZV9jzC87xFgW942LL2iS6dvHX00niEIuGe7sJitcXwZOFasNLjTVF3w4YN/zNHH8+iRM872DKJc/fh6Ccc71QKPwj1j8gazJLnl+5AAAAAElFTkSuQmCC");
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