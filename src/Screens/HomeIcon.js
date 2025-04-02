import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux"; // Import Redux hook

const HomeIcon = () => {
    const navigation = useNavigation(); // Get navigation instance
    const cart = useSelector((state) => state.cart.items); // Get cart items from Redux

    // Calculate total item count
    const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <View style={styles.headerContainer}>
            {/* Store Name */}
            <Text style={styles.title}>🛒 Fruitfy Store</Text>

            {/* Icons Container */}
            <View style={styles.iconsContainer}>
                {/* Cart Icon with Badge */}
                <TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style={{ position: "relative" }}>
                    <Icon name="shopping-cart" size={30} color="#000" />

                    {/* Badge for item count */}
                    {cartItemCount > 0 && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{cartItemCount}</Text>
                        </View>
                    )}
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
    badge: {
        position: "absolute",
        right: -6,
        top: -6,
        backgroundColor: "red",
        borderRadius: 10,
        width: 18,
        height: 18,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    },
};

export default HomeIcon;
