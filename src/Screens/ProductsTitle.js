import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ProductsTitle = ({ title }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
            <TouchableOpacity>
                <Text style={{ color: "green" }}>See All</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProductsTitle;
