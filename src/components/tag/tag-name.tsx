import React from 'react'

interface TagNameProps {
    value: string,
    quantity: number
}
export const TagName = ({ quantity, value }: TagNameProps) => {
    return (
        <div className=''>
            {/* <div className='dark:border-black border-transparent bg-gray-300 dark:bg-gray-800 p-1 dark:text-gray-100  text-gray-950'>
                <div className='flex items-center justify-center'>
                    {quantity}
                </div>
            </div> */}
            <div className='basis-full bg-gray-200 dark:bg-gray-700 p-1 dark:text-gray-100 text-gray-950 '>
                
                <p className=' line-clamp-2 hover:line-clamp-none'><div className='inline dark:bg-slate-900 bg-slate-50 p-1' >spanish</div>{value}</p>
            </div>

        </div>
    )
}
