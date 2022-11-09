import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Stat } from '../types';

const MAX_STAT_LEVEL = 10;
const MAX_STAT_VALUE = 255;

type Props = {
  stats: Stat[];
};

function PokemonStats({ stats }: Props) {
  return (
    <View style={styles.container}>
      {stats.map((stat) => (
        <View style={styles.stat} key={stat.stat.url}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>{stat.stat.name.replace('-', ' ')}</Text>
          </View>
          <View style={styles.indicatorContainer}>
            {[...Array(MAX_STAT_LEVEL).keys()].map((index) => {
              const isFilled =
                index <
                Math.ceil(stat.base_stat / (MAX_STAT_VALUE / MAX_STAT_LEVEL));

              const backgroundColor = isFilled ? '#3dc7ef' : '#ffffff';

              return (
                <View
                  key={index}
                  style={[
                    styles.indicator,
                    {
                      backgroundColor,
                    },
                  ]}
                ></View>
              );
            })}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
  stat: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  indicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 8,
    marginVertical: 8,
  },
  indicator: {
    width: 12,
    height: 8,
    borderRadius: 4,
  },
});

export default PokemonStats;
