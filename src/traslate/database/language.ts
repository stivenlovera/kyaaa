export interface ITraslateProps {
    default: string | ""
    spanish: string
    english: string
}
export const languageTraslate: ITraslateProps[] = [
    {
        default: '',
        spanish: '',
        english: ''
    },
    {
        default: 'Bahasa Indonesia',
        spanish: 'Indonesio',
        english: 'Indonesian'
    },
    {
        default: 'Deutsch',
        spanish: 'Aleman',
        english: 'German'
    },
    {
        default: 'English',
        spanish: 'Ingles',
        english: 'English'
    },
    {
        default: 'spanish',
        spanish: 'Espanol',
        english: 'Spanish'
    },
    {
        default: 'Français',
        spanish: 'Frances',
        english: 'French'
    },
    {
        default: 'Italiano',
        spanish: 'Italiano',
        english: 'Italian'
    },
    {
        default: 'Polski',
        spanish: 'Polaco',
        english: 'Polish'
    },
    {
        default: 'Português',
        spanish: 'Portugues',
        english: 'Portuguese'
    },
    {
        default: 'Tiếng Việt',
        spanish: 'Vietnamita',
        english: 'Vietnamese'
    },
    {
        default: 'Русский',
        spanish: 'Ruso',
        english: 'Russian'
    },
    {
        default: 'Українська',
        spanish: 'Ucranio',
        english: 'Ukrainian'
    },
    {
        default: 'ไทย',
        spanish: 'Tailandes',
        english: 'Thai'
    },
    {
        default: '中文',
        spanish: 'Chino',
        english: 'Chinese'
    },
    {
        default: '日本語',
        spanish: 'Japones',
        english: 'Japanese'
    },
    {
        default: '한국어',
        spanish: 'Coreano',
        english: 'Korean'
    }
]

const languajeDetect = (name: string): string => {
    const language = languageTraslate.find((lang) => lang.default == name)
    console.log('language', language?.spanish)
    return language!.spanish;
}
const languajespanish = (name: string): string => {
    const language = languageTraslate.find((lang) => lang.spanish == name)
    console.log('language', language?.default)
    return language!.default;
}