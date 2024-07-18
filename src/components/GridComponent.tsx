import { RootState } from "../store";
import styled from "styled-components";
import { getData } from "../communicator";
import { imageData } from "../interfaces";
import { useImagesPerPage } from "../utils";
import { FC, useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingComponent";
import { FilterComponent } from "./FilterComponenet";
import { useDispatch, useSelector } from "react-redux";
import { GridItemComponent } from "./GridItemComponent";
import { PaginationComponent } from "./PaginationComponent";
import { GRID_GAP, GRID_MARGINE_LEFT_RIGHT, GRID_MARGINE_TOP_BOTTOM } from "../constants";

const GridStyle = styled.section`
    gap: ${GRID_GAP}px;
    margin: ${GRID_MARGINE_TOP_BOTTOM}px ${GRID_MARGINE_LEFT_RIGHT}px ${GRID_MARGINE_TOP_BOTTOM}px ${GRID_MARGINE_LEFT_RIGHT}px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

/**
 * The main Grid which create GridItems based on screen size
 * Retrives data filtered by search from Redux Store
 * Applies pagnation on the data 
 */
const Grid: FC = () => {
    const imagesPerPage = useImagesPerPage();
    const imgData: imageData[] = useSelector((state: RootState) => state.filteredAlbumData.data);

    // For Filter DropDown - Stores the current Album ID which is selected
    const [currentAlbumID, setCurrentAlbumID] = useState<number>(-1);
    // For Storing pagination related start and end image
    const [page, setPage] = useState<{ start: number, end: number }>({ start: 0, end: imagesPerPage });

    const arrImages = imgData?.filter(item => currentAlbumID > -1 ? item.albumId === currentAlbumID : true);

    useEffect(() => { }, [imgData, currentAlbumID, imagesPerPage]);

    return (
        <>
            <FilterComponent callback={setCurrentAlbumID} albumIDs={Array.from(new Set(imgData?.map(item => item.albumId)))} />
            <GridStyle key={'Grid'}>
                {arrImages?.slice(page.start, page.end).map((val, index) => <GridItemComponent key={val.id} val={val} index={index} />)}
            </GridStyle>
            <PaginationComponent totalImages={arrImages?.length} imagesPerPage={imagesPerPage} currentPage={setPage} />
        </>
    );
}

/**
 * The Parent Grid component to display all the Thumbnail images & load the API data
 */
export const GridComponent: FC = () => {
    const dispatch = useDispatch();
    const isLoaded: Boolean = useSelector((state: RootState) => state.albumData.isLoaded);

    getData(dispatch); //Retrive the data

    return isLoaded ? <Grid /> : <LoadingSpinner key={'Loader'} />;
};