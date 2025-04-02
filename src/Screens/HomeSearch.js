import React, { useState } from "react";
import { View, TextInput, FlatList, Text, Image, TouchableOpacity } from "react-native";

const products = [
    {
        id: "1",
        name: "Apple",
        price: 4.99,
        image: "https://images.pexels.com/photos/17157900/pexels-photo-17157900/free-photo-of-apples-in-lying-in-water.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: "2",
        name: "Banana",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1721331231923-d05cfefb8fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZyZXNoJTIwYmFubmFuYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "3",
        name: "Orange",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1740760948916-2bf616b9152d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZyZXNoJTIwb3JhbmdlfGVufDB8fDB8fHww",
    },
];

const HomeSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Handle Search
    const handleSearch = (query) => {
        setSearchQuery(query);

        if (query.trim() === "") {
            setFilteredProducts([]);
        } else {
            const filtered = products.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <View style={{ padding: 10 }}>
            {/* Search Input */}
            <View
                style={{
                    backgroundColor: "#f1f1f1",
                    padding: 10,
                    borderRadius: 10,
                    marginBottom: 10,
                }}
            >
                <TextInput
                    placeholder="Search Store"
                    value={searchQuery}
                    onChangeText={handleSearch}
                    style={{ fontSize: 16 }}
                />
            </View>

            {/* Search Results */}
            {filteredProducts.length > 0 && (
                <FlatList
                    data={filteredProducts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                backgroundColor: "white",
                                padding: 10,
                                borderRadius: 10,
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 10,
                            }}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: 50, height: 50, borderRadius: 5, marginRight: 10 }}
                            />
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                                <Text style={{ fontSize: 14, color: "gray" }}>₹ {item.price.toFixed(2)} / Kg</Text>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default HomeSearch;
