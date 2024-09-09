"use server"
import { Link } from '@/i18n/routing';
import React from 'react'
import { SectionPaginationFinalize, SectionPaginationInit } from './pagination-view'
import {
    faAnglesLeft,
    faAngleLeft,
    faAngleRight,
    faAnglesRight
} from "@fortawesome/free-solid-svg-icons";

export interface AllPage {
    url: string
    name: string
}

export interface PaginationProps {
    count: number
    page: number
    numberPages: number
    skip: number
}
export const Pagination = ({ count, page, numberPages, skip }: PaginationProps) => {
    let paginas = count / skip;

    if (Math.round(paginas) > paginas) {
        paginas = Math.round(paginas)
    }

    let arrayPaginas = generateArray(1, paginas)

    const generateResiduo = arrayPaginas.length % numberPages
    let residuo = generateArray(((arrayPaginas.length + 1) - generateResiduo), arrayPaginas.length)

    let agrupamiento: number[][] = [];
    let x: number[] = [];
    arrayPaginas.map((val, i) => {
        if ((val % numberPages) != 0) {
            x.push(val)
        } else {
            x.push(val)
            agrupamiento.push(x)
            x = []
        }
    })
    agrupamiento.push(residuo)
    //console.log('arrayPaginas', arrayPaginas.length % numberPages)
    //console.log('total', agrupamiento)
    //console.log('agrupamiento', agrupamiento.length)

    const buscarPagina = () => {
        let position: number | undefined = 0;
        let array: number[] = [];
        agrupamiento.map((a, i) => {
            a.find((x) => {
                if (x == page) {
                    position = i + 1;
                    array = a;
                    return x == page
                }
            })
        })
        return {
            position,
            array
        }
    }
    const previewInit: number = Number(parseInt((page / numberPages).toString()) * numberPages) - Number(numberPages - (parseInt((page % numberPages).toString()) == 0 ? -numberPages : parseInt((page % numberPages).toString()))) - parseInt((page % numberPages).toString()) + Number(1);
    const previewFinaly: number = 1
    const nextInit: number = Number(parseInt((page / numberPages).toString()) * numberPages) + Number(numberPages - (parseInt((page % numberPages).toString()) == 0 ? numberPages : parseInt((page % numberPages).toString()))) + parseInt((page % numberPages).toString()) + Number(1);
    const nextFinaly: number = arrayPaginas.length;

    return (
        <div className='flex text-lg mx-auto flex-wrap items-center justify-center p-2'>
            <SectionPaginationInit
                pageFirst={`?page=${previewFinaly}`}
                pageSecond={`?page=${previewInit}`}
                limit={numberPages}
                page={page}
                iconFirst={faAngleLeft}
                iconSecond={faAnglesLeft}
            />
            {buscarPagina().array.map((val, i) => {
                return (
                    <Link
                        key={i}
                        className={`flex text-lg items-center justify-center px-2 text-gray-950 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full ${page == val ? 'bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-600 hover:bg-gray-200' : ''}`}
                        href={`?page=${val}`}
                    >
                        <p className='text-center p-1'>{val}</p>
                    </Link>
                )
            })}
            <SectionPaginationFinalize
                pageFirst={`?page=${nextInit}`}
                pageSecond={`?page=${nextFinaly}`}
                limit={arrayPaginas.length - generateResiduo}
                page={page}
                iconFirst={faAnglesRight}
                iconSecond={faAngleRight}
            />
        </div>
    )
}

const generateArray = (init: number, paginas: number) => {
    let arrayPaginas: number[] = []
    for (let index = init; index < paginas + 1; index++) {
        arrayPaginas.push(index)
    }
    return arrayPaginas;
}