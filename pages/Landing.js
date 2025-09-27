import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";
import Card from "../components/Card";
import Doto from "../components/Do-to";

export default function Landing() {
  const route = useRoute();
  const data = route.params;
  console.log(data);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Header />

        <View style={styles.cardRow}>
          <Card bgcolor="#8272DA" title="23°" sub="Chennai" />
          <Card bgcolor="#BF4650" title="17 June" sub="8:50:34" />
          <Card bgcolor="#C28307" title="Built Using" sub="React Native" />
        </View>

        <View style={styles.dotoContainer}>
          <Doto />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  innerContainer: {
    backgroundColor: "#efefef",
    margin: 16,
    padding: 16,
    borderRadius: 10,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
    marginVertical: 10,
  },
  dotoContainer: {
    marginTop: 10,
  },
});
