import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import Icons
import { useCart } from "../Screens/CartContext";

const CartScreen = ({ navigation }) => {
    const { cart, updateQuantity, removeFromCart } = useCart();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Cart</Text>
            {cart.length === 0 ? (
                <Text style={styles.emptyCart}>Your cart is empty.</Text>
            ) : (
                <>
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                                <View style={styles.details}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.price}>₹ {Number(item.price).toFixed(2)}</Text>
                                    <View style={styles.quantityContainer}>
                                        {/* Decrease Quantity */}
                                        <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
                                            <Icon name="remove-circle-outline" size={24} color="green" />
                                        </TouchableOpacity>
                                        <Text style={styles.quantity}>{item.quantity}</Text>
                                        {/* Increase Quantity */}
                                        <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
                                            <Icon name="add-circle-outline" size={24} color="green" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* Remove Item */}
                                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                                    <Icon name="delete" size={24} color="red" />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                    {/* Go to Checkout Button */}
                    <TouchableOpacity
                        style={styles.checkoutButton}
                        onPress={() => navigation.navigate("CheckoutScreen")} // Navigate to checkout
                    >
                        <Text style={styles.checkoutText}>Go to Checkout</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "white" },
    title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
    emptyCart: { textAlign: "center", fontSize: 18, color: "gray" },
    item: { flexDirection: "row", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor: "#ddd" },
    image: { width: 50, height: 50, borderRadius: 10, marginRight: 10 },
    details: { flex: 1 },
    name: { fontSize: 18 },
    price: { fontSize: 16, color: "#888" },
    quantityContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
    quantity: { fontSize: 18, marginHorizontal: 10 },
    checkoutButton: {
        backgroundColor: "green",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 20,
    },
    checkoutText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default CartScreen;
