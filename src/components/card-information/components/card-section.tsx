import { TagInformation, TagInformationProps } from '@/components/tag/tag-information'
import { IGroupPerName } from '@/models/groupPerName'
import { serializeSlug } from '@/utils/convertes'
import React from 'react'
interface CardSectionProps {
    datos: IGroupPerName[]
    nameSection: string
    route: string
}
export const CardSection = ({ datos, nameSection, route }: CardSectionProps) => {
    return (
        <div className="p-1">
            {
                datos!.length > 0 ? (
                    <div className="flex mx-auto flex-wrap">
                        <div className="m-1">
                            <h5 className="text-md text-gray-950 dark:text-gray-50">{nameSection}:</h5>
                        </div>
                        {
                            datos?.map((val, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="m-1">
                                        <TagInformation
                                            quantity={val.count}
                                            url={`/${route}/${serializeSlug(val.name)}`}
                                            value={val.name}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (null)
            }
        </div>
    )
}
