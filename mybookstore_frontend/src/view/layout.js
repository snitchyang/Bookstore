import React from "react";
import '../css/layout.css'
import Sidebar from "../component/sidebar";
import Header from "../component/header";
import {Navigate, Outlet} from "react-router-dom";

export default function Layout() {

    return (
        <>
            <Header/>
            <Sidebar/>
            <div className='viewArea'>
                <Outlet/>
            </div>
        </>
    )
}





