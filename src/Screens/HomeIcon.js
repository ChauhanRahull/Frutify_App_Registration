import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import MaterialIcons
import { useNavigation } from "@react-navigation/native";

const HomeIcon = () => {
    const navigation = useNavigation(); // Get navigation instance

    return (
        <View style={styles.headerContainer}>
            {/* Store Name */}
            <Text style={styles.title}>🛒 Fruitfy Store</Text>

            {/* Icons Container */}
            <View style={styles.iconsContainer}>
                {/* Cart Icon (Fixed) */}
                <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
                    <Icon name="shopping-cart" size={30} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Styles
const styles = {
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#fff",
        elevation: 3, // Adds shadow on Android
        shadowColor: "#000", // Adds shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15, // Adds spacing between icons
    },
};

export default HomeIcon;
