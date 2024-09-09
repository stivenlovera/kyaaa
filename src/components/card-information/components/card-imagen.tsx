import {Link} from '@/i18n/routing';
import React from 'react'

interface CardImagenProp {
    url: string
    urlImagen: string
}

export const CardImagen = ({ url, urlImagen }: CardImagenProp) => {
    return (
        <div
            className="bg-gray-50 dark:bg-neutral-900"
        >
            <Link
                href={url}
                className="flex flex-row min-h-full justify-center items-center"
            >
                <img
                    className='h-3/4 w-3/4 p-4'
                    alt='preview'
                    src={urlImagen}
                />
            </Link>
        </div>
    )
}
