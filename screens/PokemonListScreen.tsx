import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

import PokemonTile from '../components/PokemonTile';
import { View, Text } from '../components/Themed';
import { usePokemonList } from '../hooks/usePokemon';
import { Pokemon, PokemenonStackScreenProps } from '../types';

export default function PokemonListScreen({
  navigation,
}: PokemenonStackScreenProps<'PokemonList'>) {
  const pokemonList = usePokemonList();

  if (pokemonList.isLoading) {
    return <Text>Loading...</Text>;
  }

  const renderItem = ({ item }: ListRenderItemInfo<Pokemon>) => {
    return (
      <PokemonTile
        pokemon={item}
        onPress={(pokemon) =>
          navigation.navigate('PokemonDetail', {
            id: pokemon.id.toString(),
            name: pokemon.name,
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        renderItem={renderItem}
        data={pokemonList.data}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
});
