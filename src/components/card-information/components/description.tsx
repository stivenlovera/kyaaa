import { TagInformation, TagInformationProps } from '@/components/tag/tag-information'
import React from 'react'
import { CardSection } from './card-section'
import { IGroupPerName } from '@/models/groupPerName'

export interface DescriptionProps {
    title: string
    code: string
    character?: IGroupPerName[]
    series?: IGroupPerName[]
    tags?: IGroupPerName[]
    languaje?: IGroupPerName[]
    category?: IGroupPerName[]
    artists?: IGroupPerName[]
    group?: IGroupPerName[]
    pages?: number
    update: string
}
export const Description = ({
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
}: DescriptionProps) => {
    return (
        <div className="bg-gray-50 dark:bg-neutral-900 items-center justify-center p-2">
            <div className="p-2">
                <h4 className='dark:text-gray-50 text-gray-950 text-xl'>{title}</h4>
            </div>
            <div className="p-2">
                <h4 className='dark:text-gray-50 text-gray-950 text-xl'>{code}</h4>
            </div>
            <CardSection
                datos={series!}
                nameSection='Series'
                route='serie'
            />
            <CardSection
                datos={character!}
                nameSection='Personajes'
                route='character'
            />
            <CardSection
                datos={tags!}
                nameSection='Etiquetas'
                route='tag'
            />
             <CardSection
                datos={artists!}
                nameSection='Artistas'
                route='artist'
            />
           <CardSection
                datos={group!}
                nameSection='Grupos'
                route='group'
            />
           <CardSection
                datos={languaje!}
                nameSection='Idioma'
                route='language'
            />
           <CardSection
                datos={category!}
                nameSection='Categoria'
                route='category'
            />
            <div className="p-1">
                <div className="flex mx-auto flex-wrap">
                    <div className="m-1">
                        <h5 className="text-md text-gray-950 dark:text-gray-50">Paginas:</h5>
                    </div>
                    <div className="m-2">
                        <h5 className="text-sm text-md text-gray-950 dark:text-gray-50">{pages}</h5>
                    </div>
                </div>
            </div>
            <div className="p-1">
                <div className="flex mx-auto flex-wrap">
                    <div className="m-1">
                        <h5 className="text-md text-gray-950 dark:text-gray-50">Actualizado:</h5>
                    </div>
                    <div className="m-2">
                        <h5 className="text-sm text-md text-gray-950 dark:text-gray-50">{update}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
