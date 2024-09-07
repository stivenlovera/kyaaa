
/* export const toBase64 = (file: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
}); */

export const convertJson = (message: any): string => {
    return JSON.stringify(message, null, "\t");
}

/* export function stringToFormat(str: string) {
    const array = str.split('.');
    const ultimoCaracter = array[array.length - 1];
    return ultimoCaracter;
} */
/* export const serializeSlug = (text: string): string => {
    text.replace(/ /g, '_')
    text.replace(/[/]/g, '-div-')
    console.log(`serializeSlug ejecutando.. ${text}`)
    return text
    
} */
export const deserializeSlug = (text: string) => {
    let new_text = text.replace(/_/g, ' ')
    new_text = new_text.replace(/-div-/g, '/')
    return new_text
}

export function serializeSlug(text: string) {
    let new_text = text.replace(/ /g, '_')
    new_text = new_text.replace(/[/]/g, '-div-')
    //console.log(`serializeSlug ejecutando.. ${text}`)
    return new_text
}

/* export default function serializeSlug(text: string) {
    text.replace(/_/g, ' ')
    text.replace(/-div-/g, '/')
    return text
} */