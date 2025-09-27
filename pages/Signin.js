import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Signin({ navigation, user, setUser }) {
  const [uname, setUname] = useState("");
  const [upass, setUpass] = useState("");

  const handleCheck = () => {
    if (!uname || !upass) return;
    setUser([...user, { username: uname, password: upass }]);
    console.log(user);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Hey, Hii 👋</Text>
        <Text style={styles.subtitle}>You can sign up here :)</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your UserName"
          value={uname}
          onChangeText={setUname}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          secureTextEntry
          value={upass}
          onChangeText={setUpass}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Your Password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleCheck}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an Account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#e88f29",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  footerText: {
    textAlign: "center",
    marginTop: 16,
  },
  link: {
    textDecorationLine: "underline",
    color: "#e88f29",
    fontWeight: "600",
  },
});
