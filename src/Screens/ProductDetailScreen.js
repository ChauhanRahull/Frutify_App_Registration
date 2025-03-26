import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useCart } from "../Screens/CartContext"; // Import useCart hook

const ProductDetailScreen = ({ route }) => {
    const { item } = route.params; // Get product details
    const { addToCart } = useCart(); // Get addToCart function

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.description}>
                {item.name === "Apple" && "Apples are rich in fiber and vitamins, making them a great choice for a healthy snack!"}
                {item.name === "Banana" && "Bananas are high in potassium and energy, perfect for a quick snack or breakfast."}
                {item.name === "Orange" && "Oranges are packed with Vitamin C, making them great for boosting immunity."}
            </Text>

            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
    image: { width: 200, height: 200, borderRadius: 10 },
    name: { fontSize: 24, fontWeight: "bold", marginTop: 10 },
    price: { fontSize: 18, color: "#888", marginTop: 5 },
    description: { textAlign: "center", fontSize: 16, marginTop: 10, paddingHorizontal: 20 },
    button: { backgroundColor: "green", padding: 10, borderRadius: 5, marginTop: 20 },
    buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default ProductDetailScreen;
