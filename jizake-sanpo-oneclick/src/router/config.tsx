import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import PrefectureDetail from "../pages/prefecture-detail/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/prefecture/:id",
    element: <PrefectureDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
