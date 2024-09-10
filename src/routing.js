import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Component/Home";
import Read from "./Component/Read";
import Create from "./Component/Create";
import Update from "./Component/Update";

const customRouter=createBrowserRouter([{
  path: "/",
  element: <App></App>,
  children: [{
    path: "/home",
    element: <Home></Home>,
  },
  {
    path:"/read",
    element: <Read></Read>,
  },
  {
    path:"/create",
    element: <Create></Create>,
  },
  {
    path:"/update",
    element: <Update></Update>,
  },
],

  },]);
  export default customRouter;

