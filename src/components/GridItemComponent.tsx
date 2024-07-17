import { FC, memo } from "react";
import styled from "styled-components";
import { imageData } from "../interfaces";
import { TruncatedText } from "./TextComponent";
import { ThumbnailComponent } from "./ImageComponenet";
import { THUMB_CARD_HEIGHT, THUMB_CARD_WEIGHT } from "../constants";

const Wrapper = styled.section`
    display: flex;
    background: #333;
    border-radius: 15px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: ${THUMB_CARD_WEIGHT}px;
    height: ${THUMB_CARD_HEIGHT}px;
    &:hover {
        transform: scale(1.07);
        transition: transform 0.3s ease;
    }
`;

export const GridItemComponent: FC<{ val: imageData, index: number }> = memo(({ val, index }) => {
    return (
        <Wrapper key={`${index}-wrapper`}>
            <ThumbnailComponent key={`${index}-thumb`} navigatePath={`/albums/${val.id}`} src={val.thumbnailUrl} alt={val.title} />
            <TruncatedText key={`${index}-txt`}>{val.title}</TruncatedText>
        </Wrapper>
    );
});