import React from 'react'
interface TitleGeneralProps {
    name: string
}
export const TitleGeneral = ({ name }: TitleGeneralProps) => {
    return (
        <div className='flex items-center justify-center p-4 text-xl'>
            <h4 className='text-xl dark:text-gray-50 text-gray-950'>{name}</h4>
        </div>
    )
}
