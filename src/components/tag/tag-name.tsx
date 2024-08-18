import React from 'react'

interface TagNameProps {
    language: string,
    value: string,
    quantity: number
}
export const TagName = ({ language, quantity, value }: TagNameProps) => {
    return (
        <div className=''>
            <div className='basis-full bg-gray-200 dark:bg-gray-800 p-1 dark:text-gray-100 text-gray-950 '>
                <div className='line-clamp-2 hover:line-clamp-none z-0 text-sm'>
                    <p className='inline dark:bg-gray-900 bg-gray-300 p-1 text-sm' >
                        ({language})
                    </p>
                    {value}
                </div>
            </div>

        </div>
    )
}
