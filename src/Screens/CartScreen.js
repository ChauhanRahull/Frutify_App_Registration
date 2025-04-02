import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartScreen = ({ navigation }) => {
    const cart = useSelector((state) => state.cart.items);

    // Calculate subtotal, discount, and total
    const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) || 0) * item.quantity, 0);
    const discount = subtotal * 0.1;
    const total = subtotal - discount;

    return (
    <View style={styles.container}>
            <Text style={styles.header}>Cart Items</Text>

            <FlatList
                data={cart}
                renderItem={({ item }) => <CartItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
            />

            <View style={styles.summaryContainer}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryText}>Subtotal</Text>
                    <Text style={styles.summaryText}>₹ {subtotal.toFixed(2)}</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryText}>Discount (10%)</Text>
                    <Text style={styles.summaryText}>- ₹ {discount.toFixed(2)}</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalText}>₹ {total.toFixed(2)}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate("CheckoutScreen")}>
                <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#F8F8F8" },
    header: { fontSize: 24, fontWeight: "bold", textAlign: "left", marginBottom: 10 },
    summaryContainer: { backgroundColor: "white", padding: 15, borderRadius: 10, marginVertical: 10 },
    summaryRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 },
    summaryText: { fontSize: 16, color: "gray" },
    totalText: { fontSize: 18, fontWeight: "bold" },
    checkoutButton: { backgroundColor: "green", padding: 15, borderRadius: 5, alignItems: "center" },
    checkoutText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default CartScreen;
