'use client'
import React, { useState } from 'react'
import { ListMenu } from '../menu'
import Link from 'next/link'
interface DrawerProps {
    open: boolean
    onPress: () => void
    listMenu: ListMenu[]
}
const Drawer = ({ open, onPress, listMenu }: DrawerProps) => {
    return (
        <>
            <div className={`${!open && "hidden"} bg-dark-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => onPress()}></div>
            <div className={`${open ? "w-80" : "w-0"} bg-gray-200 dark:bg-gray-900 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
                <div className={`${!open && "hidden"} pt-3`}>
                    {
                        listMenu.map((menu, i) => {
                            return (
                                <div className='text-center p-2' key={i}>
                                    <Link
                                        href={menu.url}
                                        className="block p-2 hover:text-red-500 dark:hover:text-red-500 hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-900 dark:text-gray-50 text-gray-950"
                                        onClick={() => { onPress() }}
                                    >
                                        {menu.name}
                                    </Link>
                                </div>
                            )
                        })
                    }
                    <div className='text-center p-2'>
                        <Link
                            href="#"
                            className="block p-2 hover:text-red-500 dark:hover:text-red-500 dark:hover:bg-gray-700 dark:bg-gray-900 text-gray-950 "
                            onClick={() => { }}>
                            Ingresar
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drawer
