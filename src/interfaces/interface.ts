import type { ReactNode } from "react";

export interface stateData {
    data: imageData[];
    isLoaded: Boolean;
}

export type imageData = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
};

export interface TextComponentProps {
    children: ReactNode;
    width?: string;
}