import React from "react";
import Navbar from "./components/components_lite/Navbar";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Login from "./components/authentication/Login.jsx";
import Register from "./components/authentication/Register.jsx";
import Home from "./components/components_lite/Home";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/Register", element: <Register /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
