import React from "react";
import { Outlet } from "react-router-dom";
import NavBarHome from "./NavBarHome";

const Layout = () => {
    return(
    <>
    <NavBarHome />
    <Outlet />
    </>
    );
};

export default Layout;