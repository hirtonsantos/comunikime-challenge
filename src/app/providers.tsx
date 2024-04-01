"use client";

import { AuthContext } from "@/contexts/AuthContext";
import React, { useContext } from "react";
import Login from "./login/page";

export default function Providers({ children }: any) {
    const { isAuthenticated } = useContext(AuthContext)

    if (isAuthenticated === null) {
        return null
    }

    return (
        <React.Fragment> 
            {isAuthenticated ? children : <Login/>}
        </React.Fragment>
    ) 
}