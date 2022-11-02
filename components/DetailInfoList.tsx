import React from "react";
import { StyleSheet } from "react-native";

import { Link } from "../types";
import { Text, View } from "./Themed";

type Props = {
  label: string;
  infos: Link[];
};

export default function DetailInfoList({ label, infos }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.infoWrapper}>
        {infos.map((info) => (
          <Text style={styles.infoLabel} key={info.url}>
            {info.name.replace("-", " ")}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    marginBottom: 8,
  },
  infoWrapper: {
    backgroundColor: "transparent",
  },
  infoLabel: {
    fontSize: 20,
    textTransform: "capitalize",
  },
});
