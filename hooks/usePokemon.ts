import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Pokemon, PokemonList } from '../types';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const POKEMON_LIST_QUERY_KEY = 'pokemonList';

const getPokemonDetail = async (url: string) => {
  const response = await fetch(url);

  return await response.json();
};

const getPokemons = async (): Promise<Pokemon[]> => {
  const response = await fetch(BASE_URL);
  const result: PokemonList = await response.json();

  const detailPromises = result.results.map(async ({ url }) =>
    getPokemonDetail(url),
  );

  const data = await Promise.all(detailPromises);

  return data;
};

const usePokemonList = (): UseQueryResult<Pokemon[]> =>
  useQuery([POKEMON_LIST_QUERY_KEY], getPokemons, { staleTime: Infinity });

const usePokemonDetail = (id: string): Pokemon | undefined => {
  const pokemonList = usePokemonList();

  return pokemonList.data?.find((pokemon) => `${pokemon.id}` === `${id}`);
};

export { usePokemonList, usePokemonDetail };
