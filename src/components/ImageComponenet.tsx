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
  width: ${THUMB_WIDTH}px;
  height: ${THUMB_HEIGHT}px;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 30px;
  box-shadow: none;
  &:hover {
    transform: scale(1.07);
    transition: transform 0.3s ease;
  }
`;
export const ImageComponent: FC<{ src: string, alt: string }> = memo(({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState<string>(`../Spinner.svg`);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  return <ImageStyle src={imgSrc} alt={alt} />
});

export const ThumbnailComponent: FC<{ src: string, navigatePath: string, alt: string }> = memo(({ src, navigatePath, alt }) => {
  const navigate = useNavigate();

  const [imgSrc, setImgSrc] = useState<string>(`Spinner.svg`);
  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  return <ThumbnailStyle src={imgSrc} onClick={() => navigate(navigatePath)} alt={alt} />
});
//TODO: https://wpdean.com/css-hover-effects/