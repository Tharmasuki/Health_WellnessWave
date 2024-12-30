import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import axios from "axios";
import { useCount } from "../Context/CountContext"; // Import the custom hook

const PopularDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const { setCount } = useCount(); // Access the count updater from context

  // Fetch data from the backend API using Axios
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://192.168.8.154:5000/api/doctors/" // Replace with your local IP
        );
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  const rowsToShow = showAll ? doctors : doctors.slice(0, 6);

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Doctors</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.cardContainer}>
          {rowsToShow.map((doctor) => (
            <TouchableOpacity
              key={doctor._id}
              onPress={() => setCount((prevCount) => prevCount + 1)} // Increment count on card click
            >
              <Card style={styles.popularCard}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: doctor.image }}
                    style={styles.cardImage}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.cardTitle}>{doctor.name}</Text>
                  <Text style={styles.cardSubtitle}>{doctor.field}</Text>
                  <Text style={styles.cardDescription}>
                    {doctor.description.length > 150
                      ? `${doctor.description.slice(0, 150)}...`
                      : doctor.description}
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setShowAll(!showAll)}
        >
          <Text style={styles.toggleButtonText}>
            {showAll ? "Back" : "Show All"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollViewContainer: {
    paddingBottom: 16,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Ensure spacing between cards
  },
  popularCard: {
    width: 150, // Set card width to 48% for two cards per row
    height: 250,
    marginBottom: 16, // Add spacing between rows
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  imageContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 12,
    color: "#777",
    textAlign: "left",
    marginTop: 8,
    paddingHorizontal: 5,
    lineHeight: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  toggleButton: {
    marginTop: 16,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#66d6a7",
    borderRadius: 5,
  },
  toggleButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PopularDoctors;
