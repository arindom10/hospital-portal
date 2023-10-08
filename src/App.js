import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
