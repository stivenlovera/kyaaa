import Link from 'next/link'
import React from 'react'

interface CardImagenProp {
    url: string
    urlImagen: string
}
  
export const CardImagen = ({ url, urlImagen }: CardImagenProp) => {
    return (
        <div
            className="bg-gray-50 dark:bg-neutral-900 flex items-center justify-end"
        >
            <Link
                href={url}
                className=""
            >
                <img
                    className='w-96 p-4'
                    alt='preview'
                    src={urlImagen}
                />
            </Link>
        </div>
    )
}
