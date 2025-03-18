import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Homepage from "./HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
    ]
  }
])

export default router