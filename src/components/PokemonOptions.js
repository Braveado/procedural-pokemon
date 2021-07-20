import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonOptions({ options }) {    
    const setOptions = () => {
        if (options.length) {
            return (
                options.map(p => (
                    <Pokemon key={p.id} pokemon={p} />
                ))
            );
        } else {
            return (                
                <div className="p-4 text-gray-300">
                    Empty
                </div>            
            );
        }
    }

    // Render.
    return (
        <div className="flex flex-col w-full">
            <p className="text-lg">Pokemon Options</p>
            <div className="flex flex-wrap justify-center items-center gap-4 p-4 w-full border-2 rounded-md border-gray-200">
                {setOptions()}
            </div>
        </div>
    );    
}
