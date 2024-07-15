import { FC } from "react";
import styled from "styled-components";
import { GRID_GAP } from "../constants";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { imageData } from "../interfaces";
import { useParams } from "react-router-dom";
import { TextComponent } from "./TextComponent";
import { ImageComponent } from "./ImageComponenet";
import { ButtonComponent } from "./ButtonComponent";

const Wrapper = styled.section`
    margin: ${GRID_GAP}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AlbumComponent: FC = () => {
    let { albumId } = useParams();
    const imgData: imageData[] = useSelector((state: RootState) => state.albumData.data);
    return (
        <Wrapper>
            <ImageComponent key={`${albumId}-image`} src={imgData[Number(albumId)].url} alt={`${albumId}-image`} />
            <TextComponent key={`${albumId}-Title`}>{`Title: ${imgData[Number(albumId)].title}`}</ TextComponent>
            <TextComponent key={`${albumId}-Album`}>{`Album ID: ${imgData[Number(albumId)].albumId}`}</ TextComponent>
            <ButtonComponent key={`${albumId}-btn`}>BACK</ButtonComponent>
        </Wrapper>
    );
}