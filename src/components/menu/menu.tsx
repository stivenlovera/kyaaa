'use client'
import { useEffect, useState } from "react";
import Drawer from "./components/drawer";
import Nav from "./components/nav";

export interface ListMenu {
    name: string
    url: string
}
const menu: ListMenu[] = [
    {
        name: 'Etiquetas',
        url: '/tag'
    },
    {
        name: 'Artistas',
        url: '/artist'
    },
    {
        name: 'Serie',
        url: '/serie'
    },
    {
        name: 'Personajes',
        url: '/character'
    },
    {
        name: 'Grupo',
        url: '/group'
    },
    {
        name: 'Idioma',
        url: '/language'
    },
    {
        name: 'Categoria',
        url: '/category'
    },
    /* {
        name: 'Favoritos',
        url: ''
    },
    {
        name: 'Notificaciones',
        url: ''
    } */
]

export const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Nav
                listMenu={menu}
                onPress={(open) => setOpen(open)}
            />

            <Drawer
                open={open}
                listMenu={menu}
                onPress={() => setOpen(!open)}
            />
        </>
    );
}
