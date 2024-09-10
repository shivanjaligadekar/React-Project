import React from "react";
import Header from "../src/Component/Header";
import Footer from "../src/Component/Footer";
import { Outlet } from "react-router-dom";

export default function () {
  return (
    <div>
      <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    </div>
  );
}

