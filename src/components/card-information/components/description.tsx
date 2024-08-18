import { TagInformation, TagInformationProps } from '@/components/tag/tag-information'
import React from 'react'

export interface DescriptionProps {
    title: string
    code: string
    character?: TagInformationProps[]
    series?: TagInformationProps[]
    tags?: TagInformationProps[]
    languaje?: TagInformationProps[]
    category?: TagInformationProps[]
    artists?: TagInformationProps[]
    group?: TagInformationProps[]
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
        <div className="bg-gray-50 dark:bg-gray-900 items-center justify-center p-2">
            <div className="p-2">
                <h4 className='dark:text-gray-50 text-gray-950 text-xl'>{title}</h4>
            </div>
            <div className="p-2">
                <h4 className='dark:text-gray-50 text-gray-950 text-xl'>{code}</h4>
            </div>
            <div className="p-1">
                {
                    series!.length > 0 ? (
                        <div className="flex mx-auto flex-wrap">
                            <div className="m-1">
                                <h5 className="text-md text-gray-950 dark:text-gray-50">Series:</h5>
                            </div>
                            {
                                series?.map((val, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="m-1">
                                            <TagInformation
                                                quantity={val.quantity}
                                                url="#"
                                                value={val.value}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (null)
                }
            </div>
            <div className="p-1">
                {
                    character!.length > 0 ? (
                        <div className="flex mx-auto flex-wrap">
                            <div className="m-1">
                                <h5 className="text-md text-gray-950 dark:text-gray-50">Personajes:</h5>
                            </div>
                            {
                                character?.map((val, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="m-1">
                                            <TagInformation
                                                quantity={val.quantity}
                                                url="#"
                                                value={val.value}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (null)
                }
            </div>
            <div className="p-1">
                {
                    tags!.length > 0 ? (
                        <div className="flex mx-auto flex-wrap">
                            <div className="m-1">
                                <h5 className="text-md text-gray-950 dark:text-gray-50">Etiquetas:</h5>
                            </div>
                            {
                                tags?.map((val, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="m-1">
                                            <TagInformation
                                                quantity={val.quantity}
                                                url={`/etiqueta/${val.value.replace(' ', '-')}`}
                                                value={val.value}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (null)
                }
            </div>
            <div className="p-1">
                {
                    artists!.length > 0 ? (
                        <div className="flex mx-auto flex-wrap">
                            <div className="m-1">
                                <h5 className="text-md text-gray-950 dark:text-gray-50">Artistas:</h5>
                            </div>
                            {
                                artists?.map((val, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="m-1">
                                            <TagInformation
                                                quantity={val.quantity}
                                                url="#"
                                                value={val.value}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (null)
                }
            </div>
            <div className="p-1">
                {
                    group!.length > 0 ? (
                        <div className="flex mx-auto flex-wrap">
                            <div className="m-1">
                                <h5 className="text-md text-gray-950 dark:text-gray-50">Grupos:</h5>
                            </div>
                            {
                                group?.map((val, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="m-1">
                                            <TagInformation
                                                quantity={val.quantity}
                                                url="#"
                                                value={val.value}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (null)
                }
            </div>
            <div className="p-1">
                {
                    languaje!.length > 0 ? (
                        <div className="flex mx-auto flex-wrap">
                            <div className="m-1">
                                <h5 className="text-md text-gray-950 dark:text-gray-50">Idioma:</h5>
                            </div>
                            {
                                group?.map((val, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="m-1">
                                            <TagInformation
                                                quantity={val.quantity}
                                                url={`/etiquetas/${val.value.replace('', '-')}`}
                                                value={val.value}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (null)
                }
            </div>
            <div className="p-1">
                {
                    category!.length > 0 ? (
                        <div className="flex mx-auto flex-wrap">
                            <div className="m-1">
                                <h5 className="text-md text-gray-950 dark:text-gray-50">Categoria:</h5>
                            </div>
                            {
                                category?.map((val, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="m-1">
                                            <TagInformation
                                                quantity={val.quantity}
                                                url="#"
                                                value={val.value}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (null)
                }
            </div>
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
