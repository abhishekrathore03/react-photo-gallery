import { FC, memo } from "react";
import styled from "styled-components";
import { imageData } from "../interfaces";
import { THUMB_WIDTH } from "../constants";
import { TruncatedText } from "./TextComponent";
import { ThumbnailComponent } from "./ImageComponenet";

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: ${THUMB_WIDTH}px;
    justify-content: center;
`;

export const GridItemComponent: FC<{ val: imageData, index: number }> = memo(({ val, index }) => {
    return (
        <Wrapper key={`${index}-wrapper`}>
            <ThumbnailComponent key={`${index}-thumb`} navigatePath={`/albums/${index}`} src={val.thumbnailUrl} alt={val.title} />
            <TruncatedText key={`${index}-txt`}>{val.title}</TruncatedText>
        </Wrapper>
    );
});