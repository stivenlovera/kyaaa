'use client'
import { useEffect, useState } from "react";
import Drawer from "./components/drawer";
import Nav from "./components/nav";
import React from 'react'

export const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Nav
                onPress={(open) => setOpen(open)}
            />

            <Drawer
                open={open}
                onPress={() => setOpen(!open)}
            />
        </>
    );
}
