import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register.jsx";
import Login from "../pages/Auth/Login.jsx";
import AllArtworks from "../pages/AllArtworks/AllArtworks.jsx";
import ArtworkDetails from "../components/ArtworkDetails.jsx";
import PrivateRouts from "./PrivateRouts.jsx";
import AddArtWorks from "../pages/AddArtWorks.jsx/AddArtWorks.jsx";
import Favorites from "../pages/Favorites/Favorites.jsx";
import Gallery from "../pages/Gallery/Gallery.jsx";
import Update from "../pages/Gallery/Update.jsx";
import Error from "../components/Error.jsx";
import Dashboard from "../layouts/Dashboard.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/all-artworks",
        element: <AllArtworks></AllArtworks>,
      },
      {
        path: "/art-details/:id",
        element: (
          <PrivateRouts>
            <ArtworkDetails></ArtworkDetails>
          </PrivateRouts>
        ),
      },
      {
        path: "/add-artworks",
        element: (
          <PrivateRouts>
            <AddArtWorks></AddArtWorks>
          </PrivateRouts>
        ),
      },
      {
        path: "/favorites",
        element: (
          <PrivateRouts>
            <Favorites></Favorites>
          </PrivateRouts>
        ),
      },
      {
        path: "/my-gallary",
        element: (
          <PrivateRouts>
            <Gallery></Gallery>
          </PrivateRouts>
        ),
      },

      {
        path: "/Update/:id",
        element: <Update></Update>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
