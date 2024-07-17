import { useState, useEffect, useMemo } from 'react';
import { DOTS, GRID_GAP, GRID_MARGINE_LEFT_RIGHT, THUMB_CARD_HEIGHT, THUMB_CARD_WEIGHT } from "../constants";

const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

export const useImagesPerPage = () => {
    const calculateImagesPerPage = () => {
        const height = ((window.innerHeight - (22.2 + 24)) * devicePixelRatio) / ((THUMB_CARD_HEIGHT + GRID_GAP) * devicePixelRatio);
        const width = ((window.innerWidth - (GRID_MARGINE_LEFT_RIGHT * 2)) * devicePixelRatio) / ((THUMB_CARD_WEIGHT + GRID_GAP) * devicePixelRatio);

        return Math.floor(width) * Math.floor(height);
    }
    const [imagesPerPage, setImagePerPage] = useState(calculateImagesPerPage());

    useEffect(() => {
        const handleResize = () => setImagePerPage(calculateImagesPerPage());
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return imagesPerPage;
};

export const usePagination = (totalCount: number, pageSize: number, siblingCount = 1, currentPage: number) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;

        // If number of pages are less then desired
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        //Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        //Identify is dots need to be shown
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        //No left dots to show, but rights dots to be shown
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        //No right dots to show, but left dots to be shown
        if (shouldShowLeftDots && !shouldShowRightDots) {

            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        // Both left and right dots to be shown
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};