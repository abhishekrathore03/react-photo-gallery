import styled from "styled-components"
import { usePagination } from "../utils";
import { ArrowButton, PillComponent } from "./ButtonComponent";
import { Dispatch, FC, memo, MouseEvent, SetStateAction, useEffect, useState } from "react";

const Wrapper = styled.section`
    display: flex;
    list-style-type: none;
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
        console.log(paginationRange);
    }, [imagesPerPage, selectedPage, paginationRange])

    return (
        <Wrapper key={'Wrapper'}>
            <ArrowButton key="left-arrow" className={selectedPage === 1 ? "left disabled" : "left"} onClick={clickHandeller} id="left" />
            {paginationRange?.map((pageValue) => <PillComponent key={`pill-${(pageValue as number) + Math.random()}`} className={selectedPage === pageValue ? "selected" : ""} value={pageValue} onClick={clickHandeller} />)}
            <ArrowButton key="right-arrow" className="right" onClick={clickHandeller} id="right" />
        </Wrapper>
    )
})