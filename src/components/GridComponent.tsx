import { RootState } from "../store";
import styled from "styled-components";
import { getData } from "../communicator";
import { FC, useEffect, useState } from "react";
import { imageData } from "../interfaces/interface";
import { SearchComponent } from "./SearchComponent";
import { LoadingSpinner } from "./LoadingComponent";
import { useDispatch, useSelector } from "react-redux";
import { GridItemComponent } from "./GridItemComponent";

const GridStyle = styled.section`
  gap: 16px;
  margin: 80px;
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  align-items: center;
  background: ${props => props.theme.bg};
`;

const EVENT_TYPE: string = "scroll";
const GRID_ITEMS_PER_Page: number = 8;

export const GridComponent: FC = () => {
    const dispatch = useDispatch();
    const imgData: imageData[] = useSelector((state: RootState) => state.filteredAlbumData.data);
    const isLoaded: Boolean = useSelector((state: RootState) => state.albumData.isLoaded);

    const [totalImages, setTotalImages] = useState(0);
    const [page, setPage] = useState(32);

    const handleOnScroll = () => {
        if (window.scrollY + window.innerHeight <= document.documentElement.scrollHeight) {
            setPage((prev) => prev + GRID_ITEMS_PER_Page);
        }
    };

    useEffect(() => {
        setTotalImages(imgData.length - 1);
    }, [imgData])

    useEffect(() => {
        !isLoaded && getData(dispatch);
    }, [dispatch, isLoaded]);

    useEffect(() => {
        page < totalImages && totalImages > 0
            ? window.addEventListener(EVENT_TYPE, handleOnScroll)
            : window.removeEventListener(EVENT_TYPE, handleOnScroll);

        return () => {
            window.removeEventListener(EVENT_TYPE, handleOnScroll);
        };
    }, [page, totalImages]);

    return isLoaded ? (
        <>
            <SearchComponent key={'search'} />
            <GridStyle key={'Grid'}>
                {imgData?.slice(0, page).map((val, index) => <GridItemComponent key={val.id} val={val} index={index} />)}
            </GridStyle>
        </>) :
        (
            <LoadingSpinner key={'Loader'} />
        );
}