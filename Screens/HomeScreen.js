import React from "react";
import { ScrollView, View, StyleSheet, Text, TextInput } from "react-native";
import { Avatar, IconButton, FAB } from "react-native-paper"; // Import FAB
import { LinearGradient } from "expo-linear-gradient";
import PopularDoctors from "../Components/PopularDoctors";
import { useCount } from "../Context/CountContext";
import PopularHospitals from "../Components/PopularHospitals";

const HomePage = ({ route }) => {
  const { username } = route.params || { username: "Guest" }; // Fetch username passed from LoginScreen
  const { count } = useCount(); // Access the count from context

  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient colors={["#66d6a7", "#6fcf97"]} style={styles.header}>
          <View style={styles.headerContent}>
            <View>
              {/* Display dynamic username */}
              <Text style={styles.greeting}>Hi, {username}!</Text>
              <Text style={styles.title}>Find Your Doctor</Text>
            </View>
          </View>
          <View style={styles.searchContainer}>
            <TextInput placeholder="Search..." style={styles.searchInput} />
          </View>
        </LinearGradient>

        <PopularHospitals />
        <PopularDoctors />
      </ScrollView>

      {/* Floating Button */}
      <FAB
        style={styles.fab}
        icon="plus"
        label={`${count} clicks`}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  header: {
    padding: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 18,
    color: "#fff",
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  searchContainer: {
    marginTop: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 40,
    justifyContent: "center",
  },
  searchInput: {
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#66d6a7",
  },
});

export default HomePage;
