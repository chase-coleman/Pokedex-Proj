import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Homepage from "./HomePage.jsx";
import SinglePokemonPage from "./SinglePokemonPage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import TeamPage from "./TeamPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/pokemon/:NameorID',
        element: <SinglePokemonPage />
      },
      {
        path: '/team',
        element: <TeamPage />
      },
    ],
    errorElement: <ErrorPage />
  },
]);

export default router
// {
//   path: 'nomatch',
//   element: <NoMatchPage />
// },
// {
//   path: '/pokemon/types',
//   element: <TypesPage />
// }