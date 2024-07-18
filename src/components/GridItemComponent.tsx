import { FC, memo, useState } from "react";
import styled from "styled-components";
import { imageData } from "../interfaces";
import { TruncatedText } from "./TextComponent";
import { ThumbnailComponent } from "./ImageComponenet";
import { FavoriteComponenet } from "./FavoriteComponent";
import { THUMB_CARD_HEIGHT, THUMB_CARD_WEIGHT } from "../constants";

const Wrapper = styled.section`
    display: flex;
    background: #333;
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

export const GridItemComponent: FC<{ val: imageData, index: number }> = memo(({ val, index }) => {
    const [show, setShow] = useState<boolean>(false);
    const mouseOverHandller = (e: any) => {
        setShow(true);
    }

    const mouseOutHandller = (e: any) => {
        setShow(false);
    };
    return (
        <Wrapper key={`${index}-wrapper`} onMouseOver={mouseOverHandller} onMouseOut={mouseOutHandller} >
            <FavoriteComponenet id={val.id} show={show} />
            <ThumbnailComponent key={`${index}-thumb`} navigatePath={`/albums/${val.id}`} src={val.thumbnailUrl} alt={val.title} />
            <TruncatedText key={`${index}-txt`}>{val.title}</TruncatedText>
        </Wrapper>
    );
});