import React from "react";
import { View, Image } from "react-native";

const HomeBanner = () => {
    return (
        <View>
            <Image
                source={{ uri: "https://via.placeholder.com/300x150" }}
                style={{ width: "100%", height: 150, borderRadius: 10 }}
            />
        </View>
    );
};

export default HomeBanner;
