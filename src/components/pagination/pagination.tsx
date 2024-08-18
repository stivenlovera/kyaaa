"use server"
import Link from 'next/link'
import React from 'react'

export interface AllPage {
    url: string
    name: string
}

export interface PaginationProps {
    count: number
    page: number
}
export const Pagination = ({ count, page }: PaginationProps) => {

    //generate array
    let paginas = count / 25;

    if (Math.round(paginas) > paginas) {
        paginas = Math.round(paginas)
    }
    
    let arrayPaginas: number[] = []
    for (let index = 1; index < paginas + 1; index++) {
        arrayPaginas.push(index)
    }

    return (
        <div className='flex text-lg mx-auto flex-wrap items-center justify-center p-5'>
            <div className='flex text-lg items-center justify-center px-3 m-1 text-gray-950 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full'>{'<<'}</div>
            <div className='flex text-lg items-center justify-center px-3 m-1 text-gray-950 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full'>{'<'}</div>
            {arrayPaginas.map((val, i) => {
                return (
                    <Link
                        key={i}
                        className={`flex text-lg items-center justify-center px-3 m-1 text-gray-950 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full ${page == val ? 'bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-600 hover:bg-gray-200' : ''}`}
                        href={`?page=${val}`}
                    >
                        <p className='text-center'>{val}</p>
                    </Link>
                )
            })}
            <div className=' text-lgflex items-center justify-center px-3 m-1 text-gray-950 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full'>{'>'}</div>
            <div className=' text-lgflex items-center justify-center px-3 m-1 text-gray-950 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full'>{'>>'}</div>
        </div>
    )
}
