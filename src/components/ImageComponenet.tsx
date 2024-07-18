import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FC, memo, useEffect, useState } from "react";
import { IMAGE_WIDTH, IMAGE_HEIGHT, THUMB_HEIGHT, THUMB_WIDTH } from "../constants";

const ImageStyle = styled.img`
  border: none;
  color: black;
  border-radius: 5px;
  width: ${IMAGE_WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 50px;
`;

const ThumbnailStyle = styled(ImageStyle)`
  cursor: pointer;
  border-radius: 15px;
  width: ${THUMB_WIDTH}px;
  height: ${THUMB_HEIGHT}px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

/**
 * Component responsible to show the Big image
 * Initial image is assigned as a loading image
 * the URL is replaced with actual src inside useEffect to show a loader while the image get's loaded
 */
export const ImageComponent: FC<{ src: string, alt: string }> = memo(({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState<string>(`../spinner.svg`);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  return <ImageStyle src={imgSrc} alt={alt} />
});

/**
 * Component responsible to show the Thumbnail image
 * Initial image is assigned as a loading image
 * the URL is replaced with actual src inside useEffect to show a loader while the image get's loaded
 * 
 * Navigates to Big image on click of thumbnail
 */
export const ThumbnailComponent: FC<{ src: string, navigatePath: string, alt: string }> = memo(({ src, navigatePath, alt }) => {
  const navigate = useNavigate();

  const [imgSrc, setImgSrc] = useState<string>(`spinner.svg`);
  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  
  return <ThumbnailStyle src={imgSrc} onClick={() => navigate(navigatePath)} alt={alt} />
});