"use server"
import Link from 'next/link'
import React from 'react'
import { SectionPaginationFinalize, SectionPaginationInit } from './pagination-view'
import {
    faAnglesLeft,
    faAngleLeft,
    faAngleRight,
    faAnglesRight
} from "@fortawesome/free-solid-svg-icons";

export interface AllPage {
    url: string
    name: string
}

export interface PaginationAbcProps {
    count: number
    page: string
    abc: string[]
}
export const PaginationAbc = ({ count, page, abc }: PaginationAbcProps) => {
    return (
        <div className='flex text-lg mx-auto flex-wrap items-center justify-center p-5'>
            {/* <SectionPaginationInit
                limit={abc.length}
                page={parseInt(page)}
                iconOne={faAnglesLeft}
                iconTwo={faAngleLeft}
            /> */}
            {abc.map((val, i) => {
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
          {/*   <SectionPaginationFinalize
                limit={abc.length}
                page={parseInt(page)}
                iconOne={faAnglesRight}
                iconTwo={faAngleRight}
            /> */}
        </div>
    )
}
