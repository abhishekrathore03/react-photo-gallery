import { RootState } from "../store";
import styled from "styled-components";
import { getData } from "../communicator";
import { imageData } from "../interfaces";
import { useImagesPerPage } from "../utils";
import { SearchComponent } from "./SearchComponent";
import { LoadingSpinner } from "./LoadingComponent";
import { GRID_GAP, GRID_MARGINE } from "../constants";
import { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridItemComponent } from "./GridItemComponent";
import { DropDownComponenet } from "./DropDownComponent";
import { PaginationComponent } from "./PaginationComponent";

const GridStyle = styled.section`
  gap: ${GRID_GAP}px;
  margin: ${GRID_MARGINE}px ${GRID_MARGINE}px auto ${GRID_MARGINE}px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.bg};
`;

const Grid = () => {
    const imagesPerPage = useImagesPerPage();
    const imgData: imageData[] = useSelector((state: RootState) => state.filteredAlbumData.data);

    const [currentAlbumID, setCurrentAlbumID] = useState<number>(-1); // For DropDown
    const [page, setPage] = useState<{ start: number, end: number }>({ start: 0, end: imagesPerPage });

    const arrImages = imgData?.filter(item => currentAlbumID > -1 ? item.albumId === currentAlbumID : true);

    useEffect(() => { }, [imgData, currentAlbumID, imagesPerPage]);

    return (
        <>
            <SearchComponent key={'search'} />
            <DropDownComponenet callback={setCurrentAlbumID} albumIDs={Array.from(new Set(imgData?.map(item => item.albumId)))} />
            <GridStyle key={'Grid'}>
                {arrImages?.slice(page.start, page.end).map((val, index) => <GridItemComponent key={val.id} val={val} index={index} />)}
            </GridStyle>
            <PaginationComponent totalImages={arrImages?.length} imagesPerPage={imagesPerPage} currentPage={setPage} />
        </>
    );
}

export const GridComponent: FC = memo(() => {
    const dispatch = useDispatch();
    const isLoaded: Boolean = useSelector((state: RootState) => state.albumData.isLoaded);

    getData(dispatch); //Retrive the data

    return isLoaded ? <Grid /> : <LoadingSpinner key={'Loader'} />;
});