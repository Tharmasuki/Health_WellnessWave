import React from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import { Card, IconButton } from "react-native-paper"; // Import IconButton

// Dummy data for popular hospitals
const hospitals = [
  {
    id: 1,
    name: "City Care Hospital",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2372368663/display_1500/stock-photo-boulder-colorado-usa-september-medtronic-building-business-architecture-2372368663.jpg",
    location: "Downtown",
  },
  {
    id: 2,
    name: "Green Valley Clinic",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2229985/display_1500/stock-photo-corporate-headquarters-2229985.jpg",
    location: "Greenfield",
  },
  {
    id: 3,
    name: "Sunrise Medical Center",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2350866571/display_1500/stock-photo-intermountain-medical-center-in-murray-utah-usa-june-2350866571.jpg",
    location: "Uptown",
  },
];

const PopularHospitals = () => {
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Popular Hospitals</Text>
        {/* Right Arrow Icon */}
        <IconButton
          icon="arrow-right"
          size={24}
          onPress={() => {}}
          style={styles.arrowIcon}
          color="#333" // Arrow color
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hospitals.map((hospital) => (
          <Card key={hospital.id} style={styles.hospitalCard}>
            <Image source={{ uri: hospital.image }} style={styles.cardImage} />
            <Text style={styles.hospitalName}>{hospital.name}</Text>
            <Text style={styles.hospitalLocation}>{hospital.location}</Text>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between", // Align the title and arrow at both ends
    alignItems: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  arrowIcon: {
    marginLeft: 0, // Adjust left margin if needed
  },
  hospitalCard: {
    marginRight: 16,
    width: 150,
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    elevation: 2, // Adds shadow for Android
    backgroundColor: "#fff",
  },
  cardImage: {
    width: "100%",
    height: "70%", // Adjusts the height of the image within the card
  },
  hospitalName: {
    marginTop: 8,
    paddingHorizontal: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  hospitalLocation: {
    paddingHorizontal: 8,
    fontSize: 12,
    color: "#555",
  },
});

export default PopularHospitals;
