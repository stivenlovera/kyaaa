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
                pageFirst={`${1}`}
                pageSecond={`${page - 1}`}
                limit={1}
                page={page}
                iconFirst={faAngleLeft}
                iconSecond={faAnglesLeft}
            />
            <div
                className={`flex items-center justify-center px-2 m-1 rounded-full`}
            >
                <p className='text-center pr-3'>{page}</p> de <p className='text-center pl-3'>{allPages.length}</p>
            </div>
            <SectionPaginationFinalize
                pageFirst={`${page + 1}`}
                pageSecond={`${allPages.length}`}
                limit={allPages.length}
                page={page}
                iconFirst={faAnglesRight}
                iconSecond={faAngleRight}
            />
        </div>
    </>)
}

interface SectionPaginationProps {
    limit: number
    page: number
    pageFirst: string
    pageSecond: string
    iconFirst: IconProp
    iconSecond: IconProp
}
export const SectionPaginationInit = ({ limit, page, iconFirst, iconSecond, pageFirst, pageSecond }: SectionPaginationProps) => {
    if (limit >= page) {
        return (null)
    } else {
        return (<>
            <Link href={pageFirst} className='flex items-center justify-center px-3 p-2 dark:hover:bg-gray-800 rounded-full'>
                <FontAwesomeIcon
                    className='text-gray-900 dark:text-white text-xl'
                    icon={iconSecond}
                    size='lg'
                />
            </Link>
            <Link href={pageSecond} className='flex items-center justify-center px-3 p-2 dark:hover:bg-gray-800 rounded-full'>
                <FontAwesomeIcon
                    className='text-gray-900 dark:text-white text-xl '
                    icon={iconFirst}
                    size='lg'
                />
            </Link>
        </>)
    }
}
export const SectionPaginationFinalize = ({ limit, page, iconFirst, iconSecond, pageFirst, pageSecond }: SectionPaginationProps) => {
    if (page >= limit) {
        return (null)
    } else {
        return (<>
            <Link href={pageFirst} className='flex items-center justify-center px-3 p-2 dark:hover:bg-gray-800 rounded-full'>
                <FontAwesomeIcon
                    className='text-gray-900 dark:text-white text-xl '
                    icon={iconSecond}
                    size='lg'
                />
            </Link>
            <Link href={pageSecond} className='flex items-center justify-center px-3 p-2 dark:hover:bg-gray-800 rounded-full'>
                <FontAwesomeIcon
                    className='text-gray-900 dark:text-white text-xl '
                    icon={iconFirst}
                    size='lg'
                />
            </Link>
        </>)
    }
}