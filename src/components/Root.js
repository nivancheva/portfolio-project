import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}