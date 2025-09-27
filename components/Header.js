import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Header() {
  const route = useRoute();
  const data = route.params;
  const username = data?.uname || "User";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, {username}</Text>
      <Text style={styles.subtitle}>I help you manage your activities :)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
});
