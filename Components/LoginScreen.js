import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
      password
    );

  const validateForm = () => {
    if (!validateEmail(email)) {
      Alert.alert("Validation Error", "Please enter a valid email!");
      return false;
    }
    if (!validatePassword(password)) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 8 characters long and include:\n- Uppercase letter\n- Lowercase letter\n- Number\n- Special character (e.g., @, $, !)"
      );
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (validateForm()) {
      const username = email.split("@")[0]; // Extract username from email
      Alert.alert("Success", "Logged in successfully!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Home", { username }), // Pass username to Home
        },
      ]);
    }
  };

  return (
    <LinearGradient
      colors={["#e3fdfd", "#cbf1f5", "#a6e3e9"]}
      style={styles.container}
    >
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to find the Doctor as you want.</Text>

      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
        mode="flat"
        underlineColor="#ddd"
        theme={{
          colors: { primary: "#0EBE7F", text: "#333", background: "#fff" },
        }}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          label="Password"
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
          mode="flat"
          underlineColor="#ddd"
          theme={{
            colors: { primary: "#0EBE7F", text: "#333", background: "#fff" },
          }}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeIcon}
        >
          <Icon
            name={passwordVisible ? "eye-off" : "eye"}
            size={24}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        buttonColor="#0EBE7F"
        contentStyle={{ padding: 10 }}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0EBE7F",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 306,
  },
  eyeIcon: {
    marginLeft: -40,
  },
  button: {
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },
  signupLink: {
    color: "#0EBE7F",
    fontWeight: "bold",
  },
});

export default LoginScreen;
