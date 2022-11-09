import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { TypeName } from '../types';

type Props = {
  type: TypeName;
};

function PokemonTypeLabel({ type }: Props) {
  const getBackgroundColor = () => {
    switch (type) {
      case 'bug':
        return '#729f3f';
      case 'dark':
        return '#707070';
      case 'dragon':
        return '#f16e57';
      case 'electric':
        return '#eed535';
      case 'fairy':
        return '#fdb9e9';
      case 'fighting':
        return '#d56723';
      case 'fire':
        return '#fd7d24';
      case 'flying':
        return '#3dc7ef';
      case 'ghost':
        return '#7b62a3';
      case 'grass':
        return '#9bcc50';
      case 'ground':
        return '#846d05';
      case 'ice':
        return '#51c4e7';
      case 'normal':
        return '#a4acaf';
      case 'poison':
        return '#b97fc9';
      case 'psychic':
        return '#f366b9';
      case 'rock':
        return '#a38c21';
      case 'steel':
        return '#9eb7b8';
      case 'water':
        return '#4592c4';
      default:
        return 'transparent';
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.label}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 16,
  },
});

export default PokemonTypeLabel;
