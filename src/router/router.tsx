import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ShedulePage } from "../components/Pages/Schedule";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "schedule",
    element: <ShedulePage />,
  },
]);
