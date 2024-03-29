import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignInPage } from "./pages/01 - SignInPage/SignInPage";
import { SignUpPage } from "./pages/02 - SignUpPage/SIgnUpPage";
import { MainPage } from "./pages/03 - MainPage/MainPage";
import { PropertiesPage } from "./pages/04- PropertiesPage/PropertiesPage";
import { PropertyPage } from "./pages/05 - PropertyPage/PropertyPage";
import { ProfilePage } from "./pages/06 - ProfilePage/ProfilePage";
import { FavoritesPage } from "./pages/07 - FavoritesPage/FavoritesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/properties",
    element: <PropertiesPage />,
  },
  {
    path: "/property",
    element: <PropertyPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
