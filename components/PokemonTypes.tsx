import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Type } from '../types';
import PokemonTypeLabel from './PokemonTypeLabel';

type Props = {
  types: Type[];
};

function PokemonTypes({ types }: Props) {
  return (
    <View style={styles.container}>
      {types.map((type) => (
        <PokemonTypeLabel key={type.type.url} type={type.type.name} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: 'row',
  },
});

export default PokemonTypes;
