import { RootState } from "../store";
import styled from "styled-components";
import { getData } from "../communicator";
import { imageData } from "../interfaces";
import { FC, useEffect, useState } from "react";
import { SearchComponent } from "./SearchComponent";
import { LoadingSpinner } from "./LoadingComponent";
import { useDispatch, useSelector } from "react-redux";
import { GridItemComponent } from "./GridItemComponent";
import { DropDownComponenet } from "./DropDownComponent";

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

    const [currentAlbumID, setCurrentAlbumID] = useState<number>(-1);
    const [totalImages, setTotalImages] = useState<number>(0);
    const [page, setPage] = useState<number>(500);

    const handleOnScroll = () => {
        if (window.scrollY + window.innerHeight <= document.documentElement.scrollHeight) {
            setPage((prev) => prev + GRID_ITEMS_PER_Page);
        }
    };

    useEffect(() => {
        setTotalImages(imgData.length - 1);
    }, [imgData, currentAlbumID])

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
            <DropDownComponenet callback={setCurrentAlbumID} albumIDs={Array.from(new Set(imgData?.map(item => item.albumId)))} />
            <GridStyle key={'Grid'}>
                {imgData?.slice(0, page).filter(item => currentAlbumID > -1 ? item.albumId === currentAlbumID : true).map((val, index) => <GridItemComponent key={val.id} val={val} index={index} />)}
            </GridStyle>
        </>) : <LoadingSpinner key={'Loader'} />;
}