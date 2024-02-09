import { createBrowserRouter } from "react-router-dom";
import Session from "../pages/Session";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard   configInicial="MAIN" />,
  },
  {
    path: "/",
    element: <Session configInicial="LOGIN" />,
  },
  {
    path: "/register",
    element: <Session configInicial="REGISTER" />,
  },
  {
    path: "/dashboard/profile",
    element: <Dashboard configInicial="PROFILE" />,
  },
  {
    path: "/dashboard/exams",
    element: <Dashboard configInicial="EXAMS" />,
  },
  {
    path: "/dashboard/pacients",
    element: <Dashboard configInicial="PACIENTS" />,
  },
  {
    path: "/dashboard/newexams",
    element: <Dashboard configInicial="REGISTEREXAMS" />,
  },
  {
    path: "/dashboard/newpacients",
    element: <Dashboard configInicial="REGISTERPACIENTS" />,
  },
]);

export default router;
