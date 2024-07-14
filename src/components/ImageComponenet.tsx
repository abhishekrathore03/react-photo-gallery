import { FC, memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ImageStyle = styled.img`
  border: none;
  color: black;
  border-radius: 5px;
`;

const ThumbnailStyle = styled(ImageStyle)`
cursor: pointer;
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