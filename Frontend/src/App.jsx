import React from "react";
import Navbar from "./components/components_lite/Navbar";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Login from "./components/authentication/Login.jsx";
import Register from "./components/authentication/Register.jsx";
import Home from "./components/components_lite/Home";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy";
import TermsofService from "./components/components_lite/TermsofService";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/Register", element: <Register /> },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/TermsofService",
    element: <TermsofService />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
