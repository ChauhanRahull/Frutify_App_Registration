import React from "react";
import { View, Image } from "react-native";

const HomeBanner = () => {
    return (
        <View>
            <Image
                source={require("../assets/banner1.jpeg")}
                style={{ width: "100%", height: 150, borderRadius: 10 }}
            />
        </View>
    );
};

export default HomeBanner;
