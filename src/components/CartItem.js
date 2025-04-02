import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../Redux/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.itemDetails}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>
                    ₹ {typeof item.price === "number" ? item.price.toFixed(2) : "0.00"}
                </Text>
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => dispatch(decreaseQuantity(item.id))} style={styles.quantityButton}>
                    <Text style={styles.buttonText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity} kg</Text>
                <TouchableOpacity onPress={() => dispatch(increaseQuantity(item.id))} style={styles.quantityButton}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
                <Text style={styles.removeButton}>🗑</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 15, borderRadius: 10, marginBottom: 10 },
    image: { width: 50, height: 50, borderRadius: 10 },
    itemDetails: { flex: 1, marginLeft: 10 },
    name: { fontSize: 18, fontWeight: "bold" },
    price: { fontSize: 16, color: "#888", marginTop: 5 },
    quantityContainer: { flexDirection: "row", alignItems: "center" },
    quantityButton: { backgroundColor: "#4CAF50", padding: 5, borderRadius: 5, marginHorizontal: 5, minWidth: 30, alignItems: "center" },
    buttonText: { fontSize: 18, color: "white" },
    quantity: { fontSize: 18, marginHorizontal: 10 },
    removeButton: { fontSize: 20, color: "red", marginLeft: 10 },
});

export default CartItem;
