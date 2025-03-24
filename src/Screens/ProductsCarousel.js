import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

const products = [
    {
        id: "1",
        name: "Apple",
        price: "₹ 4.99",
        image: "https://via.placeholder.com/100",
    },
    {
        id: "2",
        name: "Banana",
        price: "₹ 4.99",
        image: "https://via.placeholder.com/100",
    },
    {
        id: "3",
        name: "Orange",
        price: "₹ 5.99",
        image: "https://via.placeholder.com/100",
    },
];

const ProductItem = ({ item }) => (
    <View
        style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10,
            alignItems: "center",
            marginRight: 10,
        }}
    >
        <Image source={{ uri: item.image }} style={{ width: 80, height: 80 }} />
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <TouchableOpacity
            style={{
                backgroundColor: "green",
                padding: 5,
                borderRadius: 5,
                marginTop: 5,
            }}
        >
            <Text style={{ color: "white" }}>+</Text>
        </TouchableOpacity>
    </View>
);

const ProductsCarousel = () => {
    return (
        <FlatList
            horizontal
            data={products}
            renderItem={({ item }) => <ProductItem item={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
        />
    );
};

export default ProductsCarousel;
