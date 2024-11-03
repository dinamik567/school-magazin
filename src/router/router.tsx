import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SchoolSchedulePage } from "../pages/school-schedule/SchoolSchedulePage";
import { SchoolMagazinePage } from "../pages/school-magazine/SchoolMagazinePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "school_schedule",
    element: <SchoolSchedulePage />,
  },
  {
    path: "school_magazine",
    element: <SchoolMagazinePage />,
  },
]);
