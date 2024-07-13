import { FC, memo } from "react";
import styled from "styled-components";
import { TruncatedText } from "./TextComponent";
import { imageData } from "../interfaces/interface";
import { ThumbnailComponent } from "./ImageComponenet";

const Wrapper = styled.section`
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GridItemComponent: FC<{ val: imageData, index: number }> = memo(({ val, index }) => {
    return (
        <Wrapper key={`${index}-wrapper`}>
            <ThumbnailComponent key={`${index}-thumb`} navigatePath={`/albums/${index}`} src={val.thumbnailUrl} alt={val.title} />
            <TruncatedText key={`${index}-txt`}>{val.title}</TruncatedText>
        </Wrapper>
    );
});