import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import { addToCart } from "../Redux/cartSlice";

const ProductDetailScreen = ({ route }) => {
    const { item } = route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation(); //  Get navigation instance

    // Ensure price is a valid number
    const itemPrice = item.price && !isNaN(Number(item.price)) ? Number(item.price).toFixed(2) : "0.00";

    const handleAddToCart = () => {
        const product = {
            ...item,
            price: item.price && !isNaN(Number(item.price)) ? Number(item.price) : 0,
        };

        dispatch(addToCart(product)); //
        navigation.navigate("HomeScreen"); //
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹ {itemPrice} / Kg</Text>
            <Text style={styles.description}>
                {item.name === "Apple" && "Apples are rich in fiber and vitamins, making them a great choice for a healthy snack!"}
                {item.name === "Banana" && "Bananas are high in potassium and energy, perfect for a quick snack or breakfast."}
                {item.name === "Orange" && "Oranges are packed with Vitamin C, making them great for boosting immunity."}
            </Text>

            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
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
