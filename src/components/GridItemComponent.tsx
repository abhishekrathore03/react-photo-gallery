import styled from "styled-components";
import { imageData } from "../interfaces";
import { FC, memo, useState } from "react";
import { TextComponent } from "./TextComponent";
import { ThumbnailComponent } from "./ImageComponenet";
import { FavoriteComponenet } from "./FavoriteComponent";
import { THUMB_CARD_HEIGHT, THUMB_CARD_WEIGHT } from "../constants";

const Wrapper = styled.section`
    display: flex;
    background: ${props => props.theme.bgLight};
    position: relative;
    border-radius: 15px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: ${THUMB_CARD_WEIGHT}px;
    height: ${THUMB_CARD_HEIGHT}px;
    &:hover {
        transform: translateY(-0.25em);
        transition: transform 0.3s ease;
    }
`;

/**
 * This is one single Grid item which contains nthe following - 
 * - Fav button
 * - Thumbnail image
 * - Title Text
 * 
 * Wrapper provides it a card like shape
 * 
 * `show` state is used for Fav componenet to be shown on mouse over
 */
export const GridItemComponent: FC<{ val: imageData, index: number }> = memo(({ val, index }) => {
    const [show, setShow] = useState<boolean>(false);
    const mouseOverHandller = () => {
        setShow(true);
    }

    const mouseOutHandller = () => {
        setShow(false);
    };
    return (
        <Wrapper key={`${index}-wrapper`} onMouseOver={mouseOverHandller} onMouseOut={mouseOutHandller} >
            <FavoriteComponenet id={val.id} show={show} />
            <ThumbnailComponent key={`${index}-thumb`} navigatePath={`/image/${val.id}`} src={val.thumbnailUrl} alt={val.title} />
            <TextComponent key={`${index}-txt`}>{val.title}</TextComponent>
        </Wrapper>
    );
});