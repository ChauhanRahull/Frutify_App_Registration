import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const product = [
    {
        id: "1",
        name: "Apple",
        price: 4.99, // ✅ Ensure price is a number
        image: "https://images.pexels.com/photos/17157900/pexels-photo-17157900/free-photo-of-apples-in-lying-in-water.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: "2",
        name: "Banana",
        price: 4.99, // ✅ Ensure price is a number
        image: "https://images.unsplash.com/photo-1721331231923-d05cfefb8fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZyZXNoJTIwYmFubmFuYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "3",
        name: "Orange",
        price: 5.99, // ✅ Ensure price is a number
        image: "https://images.unsplash.com/photo-1740760948916-2bf616b9152d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZyZXNoJTIwb3JhbmdlfGVufDB8fDB8fHww",
    },
];

const ProductItem = ({ item }) => {
    const navigation = useNavigation();

    return (
        <View style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10,
            alignItems: "center",
            marginRight: 10,
        }}>
            <Image source={{ uri: item.image }} style={{ width: 80, height: 80 }} />
            <Text>{item.name}</Text>
            <Text>₹ {item.price.toFixed(2)} / Kg</Text> {/* ✅ Display price properly */}
            <TouchableOpacity
                style={{
                    backgroundColor: "green",
                    padding: 5,
                    borderRadius: 5,
                    marginTop: 5,
                }}
                onPress={() => navigation.navigate("ProductDetailScreen", { item })}
            >
                <Text style={{ color: "white" }}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const ProductsCarousel = () => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                horizontal
                data={product}
                renderItem={({ item }) => <ProductItem item={item} />}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default ProductsCarousel;
