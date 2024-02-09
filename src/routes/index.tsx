import { createBrowserRouter } from "react-router-dom";
import Session from "../pages/Session";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <Session configInicial="LOGIN" />,
  },
  {
    path: "/register",
    element: <Session configInicial="REGISTER" />,
  },
]);

export default router;
