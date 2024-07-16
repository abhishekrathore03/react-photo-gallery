import { RootState } from "../store";
import styled from "styled-components";
import { getData } from "../communicator";
import { imageData } from "../interfaces";
import { FC, useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingComponent";
import { FilterComponent } from "./FilterComponenet";
import { GRID_GAP, GRID_MARGINE } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { GridItemComponent } from "./GridItemComponent";

const GridStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  align-items: center;
  gap: ${GRID_GAP}px;
  margin: ${GRID_MARGINE}px;
  background: ${props => props.theme.bg};
`;

const EVENT_TYPE: string = "scroll";
const GRID_ITEMS_PER_Page: number = 8;

const Grid: FC = () => {
    const imgData: imageData[] = useSelector((state: RootState) => state.filteredAlbumData.data);

    const [currentAlbumID, setCurrentAlbumID] = useState<number>(-1);
    const [totalImages, setTotalImages] = useState<number>(0);
    const [page, setPage] = useState<number>(500);

    const handleOnScroll = () => {
        if (window.scrollY + window.innerHeight <= document.documentElement.scrollHeight) {
            setPage((prev) => prev + GRID_ITEMS_PER_Page);
        }
    };

    useEffect(() => {
        page < totalImages && totalImages > 0
            ? window.addEventListener(EVENT_TYPE, handleOnScroll)
            : window.removeEventListener(EVENT_TYPE, handleOnScroll);

        return () => {
            window.removeEventListener(EVENT_TYPE, handleOnScroll);
        };
    }, [page, totalImages]);

    useEffect(() => {
        setTotalImages(imgData.length - 1);
    }, [imgData, currentAlbumID])

    return (
        <>
            <FilterComponent callback={setCurrentAlbumID} albumIDs={Array.from(new Set(imgData?.map(item => item.albumId)))} />
            <GridStyle key={'Grid'}>
                {imgData?.slice(0, page).filter(item => currentAlbumID > -1 ? item.albumId === currentAlbumID : true).map((val, index) => <GridItemComponent key={val.id} val={val} index={index} />)}
            </GridStyle>
        </>
    );
}

export const GridComponentScroll: FC = () => {
    const dispatch = useDispatch();
    const isLoaded: Boolean = useSelector((state: RootState) => state.albumData.isLoaded);

    getData(dispatch)

    return isLoaded ? <Grid /> : <LoadingSpinner key={'Loader'} />;
}
