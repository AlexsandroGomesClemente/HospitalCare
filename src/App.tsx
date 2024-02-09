import Session from "./pages/Session";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,

    },
    {
      path: "/login",
      element: <Session/>,
      
    },
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
