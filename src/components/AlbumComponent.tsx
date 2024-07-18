import styled from "styled-components";
import { NotFound } from "./NotFound";
import type { RootState } from "../store";
import { imageData } from "../interfaces";
import { getData } from "../communicator";
import { FC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextComponent } from "./TextComponent";
import { ImageComponent } from "./ImageComponenet";
import { ButtonComponent } from "./ButtonComponent";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;


const Album: FC<{ imgData: imageData, albumId: number }> = memo(({ imgData, albumId }) => {
    return (
        <Wrapper>
            <ImageComponent key={`${albumId}-image`} src={imgData.url} alt={`${albumId}-image`} />
            <TextComponent key={`${albumId}-Title`}>
                <span><b>Title: </b></span>
                <span>{`${imgData.title}`}</span>
            </ TextComponent>
            <TextComponent key={`${albumId}-Album`}>
                <span><b>Album ID: </b></span>
                <span>{`${imgData.albumId}`}</span>
            </ TextComponent>
            <ButtonComponent key={`${albumId}-btn`}>BACK</ButtonComponent>
        </Wrapper>
    );
});

export const AlbumComponent: FC = () => {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const arrImgData: imageData[] = useSelector((state: RootState) => state.albumData.data);
    const imgData: imageData = arrImgData && arrImgData[Number(albumId) - 1];

    useEffect(() => {
        arrImgData.length === 0 && getData(dispatch); //Retrive the data if the page was refreshed
    }, [albumId, dispatch, arrImgData]);

    return imgData ? <Album imgData={imgData} albumId={Number(albumId)} /> : <NotFound />
}