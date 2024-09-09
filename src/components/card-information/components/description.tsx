import React from 'react'
import { CardSection } from './card-section'
import { IGroupPerName } from '@/models/groupPerName'
import { getTranslations } from 'next-intl/server'
import moment from 'moment'

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
export const Description = async ({
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
    const t = await getTranslations('Code');
    return (
        <div className="bg-gray-50 dark:bg-neutral-900 items-center justify-center p-2">
            <div className="p-2">
                <h4 className='dark:text-gray-50 text-gray-950 text-2xl'>{title}</h4>
            </div>
            <div className="p-2">
                <h5 className='dark:text-gray-50 text-gray-950 text-xl'>{code}</h5>
            </div>
            <CardSection
                datos={series!}
                nameSection={t('series')}
                route='serie'
            />
            <CardSection
                datos={character!}
                nameSection={t('characters')}
                route='character'
            />
            <CardSection
                datos={tags!}
                nameSection={t('tags')}
                route='tag'
            />
            <CardSection
                datos={artists!}
                nameSection={t('artists')}
                route='artist'
            />
            <CardSection
                datos={group!}
                nameSection={t('group')}
                route='group'
            />
            <CardSection
                datos={languaje!}
                nameSection={t('language')}
                route='language'
            />
            <CardSection
                datos={category!}
                nameSection={t('category')}
                route='category'
            />
            <div className="p-1">
                <div className="flex mx-auto flex-wrap">
                    <div className="m-1">
                        <h5 className="text-md text-gray-950 dark:text-gray-50">{t('pages')}</h5>
                    </div>
                    <div className="m-2">
                        <h5 className="text-sm text-md text-gray-950 dark:text-gray-50">{pages}</h5>
                    </div>
                </div>
            </div>
            <div className="p-1">
                <div className="flex mx-auto flex-wrap">
                    <div className="m-1">
                        <h5 className="text-md text-gray-950 dark:text-gray-50">{t('update')}</h5>
                    </div>
                    <div className="m-2">
                        <h5 className="text-sm text-md text-gray-950 dark:text-gray-50">{moment(update).format('DD/MM/yyyy hh:mm')}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
