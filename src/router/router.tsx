import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ShedulePage } from "../components/pages/Schedule";
import { SchoolMagazinePage } from "../components/pages/School-magazine";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "schedule",
    element: <ShedulePage />,
  },
  {
    path: "school_magazine",
    element: <SchoolMagazinePage />,
  },
]);
