import { DOTS } from "../constants";
import styled from "styled-components"
import { usePagination } from "../utils";
import { PillComponent } from "./ButtonComponent";
import { Dispatch, FC, memo, MouseEvent, SetStateAction, useEffect, useState } from "react";

const Wrapper = styled.section`
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 8px;
`;

export const PaginationComponent: FC<{ totalImages: number, imagesPerPage: number, currentPage: Dispatch<SetStateAction<{ start: number; end: number; }>> }> = memo(({ totalImages, imagesPerPage, currentPage }) => {
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const paginationRange = usePagination(totalImages, imagesPerPage, 1, selectedPage);

    const clickHandeller = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.id !== "...") {
            e.currentTarget.id === "<" ? setSelectedPage(selectedPage - 1) : e.currentTarget.id === ">" ? setSelectedPage(selectedPage + 1) : setSelectedPage(parseInt(e.currentTarget.id));
        }
    }
    useEffect(() => {
        currentPage({
            start: imagesPerPage * (selectedPage - 1),
            end: imagesPerPage * selectedPage,
        });
    }, [imagesPerPage, selectedPage, paginationRange, currentPage])

    return (
        <Wrapper key={'Wrapper'}>
            <PillComponent key="left-arrow" className={selectedPage === 1 ? "disabled" : ""} onClick={clickHandeller} value="<" />
            {paginationRange?.map((pageValue) => <PillComponent key={`pill - ${(pageValue as number) + Math.random()} `} className={selectedPage === pageValue ? "selected" : pageValue === DOTS ? "dots" : "normal"} value={pageValue} onClick={clickHandeller} />)}
            <PillComponent key="right-arrow" className={paginationRange && selectedPage === paginationRange[paginationRange?.length - 1] ? "disabled" : ""} onClick={clickHandeller} value=">" />
        </Wrapper>
    )
})