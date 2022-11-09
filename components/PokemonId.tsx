import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  id: number;
};

function PokemonId({ id }: Props) {
  const formatPokemonId = (value: number): string => {
    const padding = 4 - value.toString().length;
    var zeroes = new Array(padding).join('0');

    return `#${zeroes + value}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.id}>{formatPokemonId(id)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    width: 48,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  id: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PokemonId;
