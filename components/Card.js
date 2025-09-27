import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card({ bgcolor, title, sub }) {
  return (
    <View style={[styles.card, { backgroundColor: bgcolor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sub}>{sub}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
    borderRadius: 10,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 4,
    color: "#fff",
  },
  sub: {
    fontSize: 18,
    color: "#fff",
  },
});
