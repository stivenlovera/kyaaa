'use cliente'
import React from 'react'

interface SearchProps {
    texto: string
    value: (texto: string) => void
    onSubmit: () => void
}
export const Search = ({ texto, value, onSubmit }: SearchProps) => {
    return (
        <div className="relative w-full">
            <form action="" onSubmit={onSubmit} >
                <input
                    type="text"
                    className="h-10 w-full pl-5 pr-20 rounded-lg z-0 focus:shadow focus:outline-none text-gray-900 "
                    placeholder="nico yazawa"
                    value={texto}
                    onChange={(e) => { value(e.target.value) }}
                />
                <div className="absolute top-1 right-1">
                    <button
                        className="h-8 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
                        type='submit'
                    >
                        Buscar
                    </button>
                </div>
            </form>
        </div>
    )
}
