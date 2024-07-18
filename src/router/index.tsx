import { createBrowserRouter } from "react-router-dom"
import { NotFound } from "../components/common/NotFound";
import { GridComponent } from "../components/grid/GridComponent";
import { GridComponentScroll } from "../components/grid/GridComponentScroll";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GridComponent />,
    errorElement: <NotFound />,
  },
  {
    path: "/scroll",
    element: <GridComponentScroll />,
    errorElement: <NotFound />,
  },
  {
    path: "image/:imageId",
    async lazy() {
      let { AlbumComponent } = await import("../components/album/AlbumComponent");
      return { Component: AlbumComponent };
    },
  },
  {
    action: NotFound,
    element: <NotFound />
  }
]);