import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";

import PokemonTile from "../components/PokemonTile";
import { View } from "../components/Themed";
import usePokemonList from "../hooks/usePokemon";
import { Pokemon, RootTabScreenProps } from "../types";

export default function PokemonListScreen({
  navigation,
}: RootTabScreenProps<"PokemonList">) {
  const pokemonList = usePokemonList();

  const renderItem = ({ item }: ListRenderItemInfo<Pokemon>) => {
    return (
      <PokemonTile
        pokemon={item}
        onPress={(pokemon) => navigation.navigate("PokemonDetail", { pokemon })}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        renderItem={renderItem}
        data={pokemonList}
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