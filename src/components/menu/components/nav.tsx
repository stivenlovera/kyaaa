'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import {
    faMoon,
    faSun,
} from "@fortawesome/free-regular-svg-icons";
import { Search } from './search';
import Link from 'next/link';
import { ListMenu } from '../menu';

interface NavProps {
    onPress: (open: boolean) => void
    listMenu: ListMenu[]
}

const Nav = ({ onPress, listMenu }: NavProps) => {
    const [modeDark, setModeDark] = useState(true)
    const [search, setSearch] = useState<string>('')

    const enviar = () => {
        console.log('presionado')
    }
    useEffect(() => {
        document.documentElement.classList.toggle("dark");
    }, [modeDark])

    return (
        <nav className="sticky top-0 bg-gray-200 border-gray-200 dark:bg-gray-800" >
            <div className='flex justify-between'>
                <Link href={"/"} className='flex justify-start space-x-2 p-2'>
                    <Image
                        className=''
                        src="/img/logo_white.png" ///img/logo_dark.png
                        alt="logo"
                        width={40}
                        height={0}
                    />

                    <h5 className={`font-wild-words-roman self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black`} >Kyaaa</h5>
                </Link>
                <div className='justify-end space-x-2 p-2'>
                    <button
                        className="xl:hidden p-2 w-10 rounded-lg bg-grayl-300 hover:bg-grayl-400 dark:bg-grayl-700 dark:hover:bg-grayl-800"
                        onClick={() => setModeDark(!modeDark)}>
                        <FontAwesomeIcon
                            className='text-gray-900 dark:text-white text-xl '
                            icon={modeDark ? faMoon : faSun}
                            size='lg'
                        />
                    </button>
                    <button
                        className='xl:hidden p-2 w-10 rounded-lg bg-grayl-300 hover:bg-grayl-400 dark:bg-grayl-700 dark:hover:bg-grayl-800'
                        onClick={() => onPress(true)}
                    >
                        <FontAwesomeIcon
                            className='text-gray-900 dark:text-white text-xl'
                            icon={faBars}
                            size='lg'
                        />
                    </button>
                    <div className={`hidden w-full xl:block`}>
                        <ul className="font-medium flex space-x-2">
                            <li>
                                <Search
                                    texto={search}
                                    value={setSearch}
                                    onSubmit={enviar}
                                />
                            </li>
                            <li>
                                <button
                                    className="p-2 w-10 rounded-lg bg-grayl-300 hover:bg-grayl-400 dark:bg-grayl-700 dark:hover:bg-grayl-800"
                                    onClick={() => setModeDark(!modeDark)}>
                                    <FontAwesomeIcon
                                        className='text-gray-900 dark:text-white text-xl '
                                        icon={modeDark ? faMoon : faSun}
                                        size='lg'
                                    />
                                </button>
                            </li>
                            {
                                listMenu.map((menu, i) => {
                                    return (
                                        <li key={i}>
                                            <Link href={menu.url} className="block p-2 hover:text-red-500 dark:hover:text-red-500 dark:text-white text-black ">
                                                {menu.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <a
                                    href="#"
                                    className="block p-2 hover:text-red-500 dark:hover:text-red-500 dark:text-white text-black"
                                    onClick={() => onPress(true)}>
                                    Ingresar
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="xl:hidden font-medium flex space-x-4 p-2">
                <Search
                    texto={search}
                    value={setSearch}
                    onSubmit={enviar}
                />
            </div>
        </nav >
    )
}

export default Nav
