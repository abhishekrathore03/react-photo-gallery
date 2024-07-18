import styled from "styled-components";
import { FC, memo, useEffect, useState } from "react";
import { retriveFromStorage, setInStorage } from "../utils";

const FavoriteStyle = styled.img<{ $visibility?: boolean }>`
    top: 8px;
    right: 10px;
    cursor: pointer;
    position: absolute;
    visibility: ${props => props.$visibility ? "visible" : "hidden"};
`;

const getIsSelected = (id: number) => retriveFromStorage(String(id));

/**
 * Favorite component to mark a pic as favorite
 * It stores the favorite data in browswer's local storage
 * 
 * Component is visible only on mouse over if the image is not fav
 * On fav image componenet is always visible
 * 
 * User can click on Star icon to mark is fav or click again to remove from fav
 */
export const FavoriteComponenet: FC<{ id: number, show: boolean }> = memo(({ id, show }) => {
    const [isSelected, setIsSelected] = useState<boolean>(getIsSelected(id));

    const handeller = (e: any) => {
        setInStorage(e.currentTarget.id);
        setIsSelected(Boolean(getIsSelected(id)));
    };

    useEffect(() => { }, [isSelected])

    return <FavoriteStyle id={String(id)} $visibility={isSelected ? isSelected : show} src={`favorite-${isSelected ? "done" : "pending"}.svg`} onClick={handeller} />
});