import React from 'react'

export default function PokemonType({type}) {
    return (
        <p className={`flex items-center justify-center w-16 capitalize text-sm px-1.5 py-0.5 rounded-md text-white font-semibold bg-${type}`}>
            {type}
        </p>
    )
}
