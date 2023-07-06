import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import { FavoritesContextProvider } from "./store/favorites-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "allmeetups", element: <AllMeetups /> },
      { path: "newmeetup", element: <NewMeetup /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </FavoritesContextProvider>
);
