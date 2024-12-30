import React, { useState } from "react";
import { View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    if (!name.trim()) {
      Alert.alert("Validation Error", "Name is required!");
      return false;
    }
    if (!validateEmail(email)) {
      Alert.alert("Validation Error", "Please enter a valid email!");
      return false;
    }
    if (!validatePassword(password)) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 8 characters long and include:\n- One uppercase letter\n- One lowercase letter\n- One number\n- One special character (e.g., @, $, !)"
      );
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert("Validation Error", "Passwords do not match!");
      return false;
    }
    return true;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      Alert.alert("Success", "Account created successfully!", [
        {
          text: "OK",
          onPress: () => navigation.replace("Login"),
        },
      ]);
    }
  };

  return (
    <LinearGradient
      colors={["#e3fdfd", "#cbf1f5", "#a6e3e9"]}
      style={styles.container}
    >
      <Text style={styles.title}>Join us to start searching</Text>
      <Text style={styles.subtitle}>
        Book appointments, consult with doctors, and manage your health easily
        with our app.
      </Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        label="Name"
        value={name}
        onChangeText={setName}
        mode="flat"
        underlineColor="#ddd"
        theme={{
          colors: { primary: "#0EBE7F", text: "#333", background: "#fff" },
        }}
      />
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
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          label="Confirm Password"
          value={confirmPassword}
          secureTextEntry={!confirmPasswordVisible}
          onChangeText={setConfirmPassword}
          mode="flat"
          underlineColor="#ddd"
          theme={{
            colors: { primary: "#0EBE7F", text: "#333", background: "#fff" },
          }}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          style={styles.eyeIcon}
        >
          <Icon
            name={confirmPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <Button
        mode="contained"
        onPress={handleSignUp}
        style={styles.button}
        buttonColor="#0EBE7F"
        contentStyle={{ padding: 10 }}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </Button>

      {/* Login Prompt */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>
          Have an account? <Text style={styles.loginLink}>Log in</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
  },
  button: {
    marginTop: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginTop: 10,
  },
  loginLink: {
    color: "#0EBE7F",
    fontWeight: "bold",
  },
});

export default SignUpScreen;
