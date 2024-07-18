import styled from "styled-components";
import { FC, memo, useEffect } from "react";
import type { RootState } from "../../store";
import { getData } from "../../communicator";
import { useParams } from "react-router-dom";
import { NotFound } from "../common/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { TextComponent } from "../common/TextComponent";
import { ImageComponent } from "../common/ImageComponenet";
import { ButtonComponent } from "../common/ButtonComponent";
import type { IAlbumComponentProps, imageData } from "../../interfaces";

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const Album: FC<IAlbumComponentProps> = memo(({ imgData, albumId }) => {
    return (
        <Wrapper>
            <ButtonComponent key={`${albumId}-btn`}>BACK</ButtonComponent>
            <ImageComponent key={`${albumId}-image`} src={imgData.url} alt={`${albumId}-image`} />
            <TextComponent key={`${albumId}-Title`}>
                <span><b>Title: </b></span>
                <span>{`${imgData.title}`}</span>
            </ TextComponent>
            <TextComponent key={`${albumId}-Album`}>
                <span><b>Album ID: </b></span>
                <span>{`${imgData.albumId}`}</span>
            </ TextComponent>
        </Wrapper>
    );
});

/**
 * Component to show the big image.
 * Retrives the image by id from the data stored in Redux store
 * 
 * In case of image not available then returns Not Found Page
 */
export const AlbumComponent: FC = () => {
    const dispatch = useDispatch();
    const { imageId } = useParams();
    const arrImgData: imageData[] = useSelector((state: RootState) => state.albumData.data);
    const imgData: imageData = arrImgData && arrImgData[Number(imageId) - 1];

    useEffect(() => {
        arrImgData.length === 0 && getData(dispatch); //Retrive the data if the page was refreshed
    }, [imageId, dispatch, arrImgData]);

    return imgData ? <Album imgData={imgData} albumId={Number(imageId)} /> : <NotFound />
}