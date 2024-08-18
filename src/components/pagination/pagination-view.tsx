import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import {
    faAnglesLeft,
    faAngleLeft,
    faAngleRight,
    faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface PaginationProps {
    allPages: number[]
    page: number
    code: string
}

export const PaginationView = ({ page, allPages, code }: PaginationProps) => {

    return (<>
        <div className='flex mx-auto flex-wrap items-center justify-center p-2'>
            <SectionPaginationInit
                limit={1}
                page={page}
                iconOne={faAngleLeft}
                iconTwo={faAnglesLeft}
            />
            <div
                className={`flex items-center justify-center px-2 m-1 rounded-full`}
            >
                <p className='text-center pr-3'>{page}</p> de <p className='text-center pl-3'>{allPages.length}</p>
            </div>
            <SectionPaginationFinalize
                limit={allPages.length}
                page={page}
                iconOne={faAnglesRight}
                iconTwo={faAngleRight}
            />
        </div>
    </>)
}

interface SectionPaginationProps {
    limit: number
    page: number
    iconOne: IconProp
    iconTwo: IconProp
}
export const SectionPaginationInit = ({ limit, page, iconOne, iconTwo }: SectionPaginationProps) => {
    if (limit == page) {
        return (null)
    } else {
        return (<>
            <Link href={`${1}`} className='flex items-center justify-center px-3 p-2 dark:hover:bg-gray-800 rounded-full'>
                <FontAwesomeIcon
                    className='text-gray-900 dark:text-white text-xl'
                    icon={iconTwo}
                    size='lg'
                />
            </Link>
            <Link href={`${page - 1}`} className='flex items-center justify-center px-3 p-2 dark:hover:bg-gray-800 rounded-full'>
                <FontAwesomeIcon
                    className='text-gray-900 dark:text-white text-xl '
                    icon={iconOne}
                    size='lg'
                />
            </Link>
        </>)
    }
}
export const SectionPaginationFinalize = ({ limit, page, iconOne, iconTwo }: SectionPaginationProps) => {
    if (limit == page) {
        return (null)
    } else {
        return (<>
            <Link href={`${page + 1}`} className='flex items-center justify-center px-3 p-2 dark:hover:bg-gray-800 rounded-full'>
                <FontAwesomeIcon
                    className='text-gray-900 dark:text-white text-xl '
                    icon={iconTwo}
                    size='lg'
                />
            </Link>
            <Link href={`${limit}`} className='flex items-center justify-center px-3 p-2 dark:hover:bg-gray-800 rounded-full'>
                <FontAwesomeIcon
                    className='text-gray-900 dark:text-white text-xl '
                    icon={iconOne}
                    size='lg'
                />
            </Link>
        </>)
    }
}