import { NotFound } from "../components/NotFound";
import { createBrowserRouter } from "react-router-dom"
import { GridComponent } from "../components/GridComponent";
import { AlbumComponent } from "../components/AlbumComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GridComponent />,
    errorElement: <NotFound />,
    children: [
    ],
  },
  {
    path: "albums/:albumId",
    element: <AlbumComponent />,
  },
  {
    action: NotFound,
    element: <NotFound />
  }
]);