import React from 'react';

import { Pokemon, PokemonList } from '../types';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = React.useState<Pokemon[]>([]);

  const fetchPokemonDetail = async (name: string): Promise<Pokemon> => {
    const response = await fetch(`${BASE_URL}/${name}`);

    return await response.json();
  };

  const fetchPokemonList = async (url: string) => {
    const response = await fetch(url);
    const result: PokemonList = await response.json();

    const detailPromises = result.results.map(async ({ name }) =>
      fetchPokemonDetail(name).then((response) => response),
    );

    const data = await Promise.all(detailPromises);

    setPokemonList(data);
  };

  React.useEffect(() => {
    // fetchPokemonList(`${BASE_URL}?limit=150`);
    fetchPokemonList(BASE_URL);
  }, []);

  return pokemonList;
};

export default usePokemonList;
