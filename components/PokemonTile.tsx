import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Pokemon } from '../types';
import PokemonId from './PokemonId';
import PokemonTypes from './PokemonTypes';

type Props = {
  pokemon: Pokemon;
  onPress: (pokemon: Pokemon) => void;
};

function PokemonTile({ pokemon, onPress }: Props) {
  const { id, name, sprites, types } = pokemon;

  return (
    <TouchableOpacity onPress={() => onPress(pokemon)} style={styles.container}>
      <View>
        <View style={styles.titleWrapper}>
          <Text style={styles.label}>{name}</Text>
          <PokemonId id={id} />
        </View>
        <PokemonTypes types={types} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: sprites.front_default }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#E6E7EB',
    borderRadius: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    marginBottom: 2,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default PokemonTile;
