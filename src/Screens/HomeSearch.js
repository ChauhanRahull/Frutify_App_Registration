import React from "react";
import { View, TextInput } from "react-native";


const HomeSearch = () => {
    return (
        <View
            style={{
                backgroundColor: "#f1f1f1",
                padding: 10,
                borderRadius: 10,
            }}
        >
            <TextInput placeholder="Search Store" />
        </View>
    );
};

export default HomeSearch;
