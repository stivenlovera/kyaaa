import {Link} from '@/i18n/routing';
import React from 'react'
import { TagName } from '../tag/tag-name'

export interface CardDescriptionProps {
    name: string
    language: string
    urlImagen: string
    url: string
}
export const CardDescription = ({ language, name, urlImagen, url }: CardDescriptionProps) => {
    return (
        <div>
            <Link
                className="items-start justify-center w-full"
                href={url}
            >
                <img
                    alt='preview'
                    src={urlImagen}
                />
                <TagName
                    language={language}
                    quantity={10000}
                    value={name}
                />
            </Link>
        </div>

    )
}
