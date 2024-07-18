import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import { retriveFromStorage, setInStorage } from "../utils";

const FavoriteStyle = styled.img<{ $visibility?: boolean }>`
    top: 8px;
    right: 10px;
    position: absolute;
    visibility: ${props => props.$visibility ? "visible" : "hidden"};
`;

const getIsSelected = (id: number) => retriveFromStorage(String(id));

export const FavoriteComponenet: FC<{ id: number, show: boolean }> = ({ id, show }) => {
    const [isSelected, setIsSelected] = useState<boolean>(getIsSelected(id));

    const handeller = (e: any) => {
        setInStorage(e.currentTarget.id);
        setIsSelected(Boolean(getIsSelected(id)));
    };

    useEffect(() => { }, [isSelected])

    return <FavoriteStyle id={String(id)} $visibility={isSelected ? isSelected : show} src={`favorite-${isSelected ? "done" : "pending"}.svg`} onClick={handeller} />
};