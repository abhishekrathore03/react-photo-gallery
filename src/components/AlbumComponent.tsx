import { FC, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { imageData } from "../interfaces";
import { useParams } from "react-router-dom";
import { TextComponent } from "./TextComponent";
import { ImageComponent } from "./ImageComponenet";
import { ButtonComponent } from "./ButtonComponent";

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const AlbumComponent: FC = () => {
    const { albumId } = useParams();
    const imgData: imageData[] = useSelector((state: RootState) => state.albumData.data);
    useEffect(() => { }, [albumId]);

    return (
        <Wrapper>
            <ImageComponent key={`${albumId}-image`} src={imgData[Number(albumId) - 1].url} alt={`${albumId}-image`} />
            <TextComponent key={`${albumId}-Title`}>
                <span><b>Title: </b></span>
                <span>{`${imgData[Number(albumId) - 1].title}`}</span>
            </ TextComponent>
            <TextComponent key={`${albumId}-Album`}>
                <span><b>Album ID: </b></span>
                <span>{`${imgData[Number(albumId) - 1].albumId}`}</span>
            </ TextComponent>
            <ButtonComponent key={`${albumId}-btn`}>BACK</ButtonComponent>
        </Wrapper>
    );
}