import { NotFound } from "../components/NotFound";
import { createBrowserRouter } from "react-router-dom"
import { GridComponent } from "../components/GridComponent";
import { GridComponentScroll } from "../components/GridComponentScroll";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GridComponent />,
    errorElement: <NotFound />,
  },
  {
    path: "/search",
    element: <GridComponentScroll />,
    errorElement: <NotFound />,
  },
  {
    path: "albums/:albumId",
    async lazy() {
      let { AlbumComponent } = await import("../components/AlbumComponent");
      return { Component: AlbumComponent };
    },
  },
  {
    action: NotFound,
    element: <NotFound />
  }
]);