// prc -> crea componente

import { PokemonsResponce, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/shopping-cart";


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponce = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    //  throw new Error("Algo salio mal");


    return pokemons;
}

export default async function PokemonPage() {

    const pokemons = await getPokemons(150)



    return (
        <div className="flex flex-col ">
            <span className="text-5xl my-2">Listado de Poémons <small>Estático</small></span>

            <PokemonGrid pokemon={pokemons} />

        </div>
    );
}

