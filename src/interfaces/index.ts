import type { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";

export interface stateData {
    data: imageData[];
    isLoaded: Boolean;
}

export type imageData = {
    id: number,
    url: string,
    title: string,
    albumId: number,
    thumbnailUrl: string,
};

export interface ITextComponentProps {
    children: ReactNode;
    width?: string;
};

export interface IAlbumComponentProps {
    imgData: imageData;
    albumId: number;
};

export interface IPillComponentProps {
    className: string;
    value: number | string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export interface IImageComponentProps {
    src: string;
    navigatePath?: string;
    alt: string;
}

export interface IFavComponentProps {
    id: number;
    show: boolean;
}

export interface IDropDownProps {
    albumIDs: number[];
    callback: Dispatch<SetStateAction<number>>;
}

export interface IPaginationComponent {
    totalImages: number;
    imagesPerPage: number;
    currentPage: Dispatch<SetStateAction<{ start: number; end: number; }>>;
}