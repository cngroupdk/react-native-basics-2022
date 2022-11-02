import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Link } from "../types";

type Props = {
  label: string;
  infos: Link[];
};

export default function DetailInfoList({ label, infos }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {infos.map((info) => (
        <Text style={styles.infoLabel} key={info.url}>
          {info.name.replace("-", " ")}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 20,
    textTransform: "capitalize",
  },
});
