import Link from 'next/link'
import React from 'react'

interface CardImagenProp {
    url: string
    urlImagen: string
}
export const CardImagen = ({ url, urlImagen }: CardImagenProp) => {
    return (
        <Link
            href={url}
            className="bg-gray-50 dark:bg-gray-900 flex items-center justify-end"
        >
            <img
                className='w-96 p-4'
                alt='preview'
                src={urlImagen}
            />
        </Link>
    )
}
