import React from 'react'
import { TagInformation, TagInformationProps } from '../tag/tag-information'
import { Description } from './components/description'
import { CardImagen } from './components/card-imagen'
import { IGroupPerName } from '@/models/groupPerName'

export interface CardInformationProps {
    title: string
    code: string
    pages: number
    update: string
    urlImagen: string
    url: string
    character?: IGroupPerName[]
    tags?: IGroupPerName[]
    series?: IGroupPerName[]
    languaje?: IGroupPerName[]
    category?: IGroupPerName[]
    artists?: IGroupPerName[]
    group?: IGroupPerName[]

}
export const CardInformation = ({
    urlImagen,
    url,
    title,
    code,
    character,
    tags,
    series,
    languaje,
    category,
    artists,
    group,
    pages,
    update
}: CardInformationProps) => {
    return (
        <>
            <CardImagen
                url={url}
                urlImagen={urlImagen}
            />
            <Description
                code={code}
                title={title}
                update={update}
                pages={pages}
                artists={artists}
                category={category}
                group={group}
                character={character}
                languaje={languaje}
                series={series}
                tags={tags}
            />
        </>
    )
}
