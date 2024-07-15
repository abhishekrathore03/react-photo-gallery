import styled from "styled-components"
import { usePagination } from "../utils";
import { ArrowButton, PillComponent } from "./ButtonComponent";
import { Dispatch, FC, memo, MouseEvent, SetStateAction, useEffect, useState } from "react";
import { DOTS } from "../constants";

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
        e.currentTarget.id === "left" ? setSelectedPage(selectedPage - 1) : e.currentTarget.id === "right" ? setSelectedPage(selectedPage + 1) : setSelectedPage(parseInt(e.currentTarget.id));
    }
    useEffect(() => {
        currentPage({
            start: imagesPerPage * (selectedPage - 1),
            end: imagesPerPage * selectedPage,
        });
    }, [imagesPerPage, selectedPage, paginationRange, currentPage])

    return (
        <Wrapper key={'Wrapper'}>
            <ArrowButton key="left-arrow" className={selectedPage === 1 ? "left disabled" : "left"} onClick={clickHandeller} id="left" />
            {paginationRange?.map((pageValue) => <PillComponent key={`pill - ${(pageValue as number) + Math.random()} `} className={selectedPage === pageValue ? "selected" : pageValue === DOTS ? "dots" : ""} value={pageValue} onClick={clickHandeller} />)}
            <ArrowButton key="right-arrow" className="right" onClick={clickHandeller} id="right" />
        </Wrapper>
    )
})