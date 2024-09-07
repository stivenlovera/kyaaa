import { ITraslateProps } from "../database/language"

export interface IIndexPage {
    title: ITraslateProps
}
export const language: IIndexPage = {
    title: {
        default: "TODOS LOS LENGUAJES",
        spanish: "TODOS LOS LENGUAJES",
        english: "ALL LANGUAGES"
    }
}