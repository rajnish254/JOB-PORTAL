import React from "react";
import Navbar from "./components/components_lite/Navbar";
import { createBrowserRouter, Route } from "react-router-dom";
import { Login } from "./components/authentication/Login.jsx";
import { Register } from "./components/authentication/Signup.jsx";
import { Home } from "lucide-react";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
