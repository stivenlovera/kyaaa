import {Link} from '@/i18n/routing';
import React from 'react'

export interface TagInformationProps {
    value: string,
    quantity: number,
    url: string
}

export const TagInformation = ({ quantity, value, url }: TagInformationProps) => {
    return (
        <Link
            className='flex'
            href={url}
        >
            <div className='rounded-l bg-gray-200 dark:bg-gray-700 p-1 dark:text-gray-100 text-gray-950 text-sm'>
                {value}
            </div>
            <div className='border-l-2 dark:border-black border-transparent rounded-r bg-gray-300 dark:bg-gray-800 p-1 dark:text-gray-100  text-gray-950 text-sm'>
                {quantity}
            </div>
        </Link>
    )
}
