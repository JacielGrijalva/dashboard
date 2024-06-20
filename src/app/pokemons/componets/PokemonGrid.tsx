import React from 'react'

import PokemonCart from './PokemonCart';
import { SimplePokemon } from '../interfaces/simple-pokemon';

interface Props {
    pokemon: SimplePokemon[]
}


const PokemonGrid = ({ pokemon }: Props) => {

    const pokemons = pokemon

    return (
        <div className="flex flex-wrap gap-10 items-center justify-center ">

            {
                pokemons.map(pokemon => (

                    < PokemonCart key={pokemon.id} pokemon={pokemon} />



                ))
            }

        </div>
    )
}

export default PokemonGrid
