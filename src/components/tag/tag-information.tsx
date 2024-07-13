import React from 'react'

interface TagInformationProps {
    value: string,
    quantity: number
}
export const TagInformation = ({ quantity, value }: TagInformationProps) => {
    return (
        <div className='flex'>
            <div className='rounded-l bg-gray-50 dark:bg-gray-700 p-1 dark:text-gray-100 text-gray-950 '>
                {value}
            </div>
            <div className='border-l-2 dark:border-black border-transparent rounded-r bg-gray-300 dark:bg-gray-800 p-1 dark:text-gray-100  text-gray-950'>
                {quantity}
            </div>
        </div>
    )
}
