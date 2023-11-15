import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Layout/Main";
import Home from "./Components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
