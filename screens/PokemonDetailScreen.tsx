import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DetailInfoList from '../components/DetailInfoList';
import PokemonStats from '../components/PokemonStats';
import PokemonTypes from '../components/PokemonTypes';
import { View } from '../components/Themed';
import { usePokemonDetail } from '../hooks/usePokemon';
import { PokemenonStackScreenProps } from '../types';

export default function PokemonDetailScreen({
  route,
}: PokemenonStackScreenProps<'PokemonDetail'>) {
  const { id } = route.params;
  const pokemon = usePokemonDetail(id);

  if (!pokemon) {
    return <Text>Loading...</Text>;
  }

  const { types, stats, name } = pokemon;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: pokemon.sprites.other['official-artwork'].front_default,
          }}
        />
      </View>
      <PokemonTypes types={types} />
      <View style={styles.infoWrapper}>
        <DetailInfoList
          label="Abilities"
          infos={pokemon.abilities.map((ability) => ability.ability)}
        />
      </View>
      <PokemonStats stats={stats} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: '300',
    fontSize: 32,
    textAlign: 'center',
  },
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    height: 240,
    width: 240,
  },
  infoWrapper: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#50b1d7',
  },
});
