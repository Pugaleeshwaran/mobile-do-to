import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Login({ navigation, user }) {
  const [uname, setUname] = useState("");
  const [upass, setUpass] = useState("");
  const [check, setCheck] = useState(true);

  const handleCheck = () => {
    let userFound = false;
    user.forEach((item) => {
      if (item.username === uname && item.password === upass) {
        console.log("login");
        userFound = true;
        navigation.navigate("Landing", { uname });
      }
    });
    if (!userFound) {
      console.log("failed");
      setCheck(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Hey, Hii 👋</Text>
        {check ? (
          <Text style={styles.subtitle}>
            I help you manage your activities after you login :)
          </Text>
        ) : (
          <Text style={[styles.subtitle, { color: "red" }]}>
            Please Signin before you Login :(
          </Text>
        )}

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

        <TouchableOpacity style={styles.button} onPress={handleCheck}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't Have an Account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Signin")}
          >
            Signin
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
    backgroundColor: "#8272DA",
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
    color: "#8272DA",
    fontWeight: "600",
  },
});
