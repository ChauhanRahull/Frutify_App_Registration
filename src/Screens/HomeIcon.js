import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeIcon = () => {
    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>🛒 Fruitfy Store</Text>

            <TouchableOpacity onPress={() => alert('Profile Clicked!')}>
                <Ionicons name="person-circle-outline" size={30} color="#000" />
            </TouchableOpacity>
        </View>
    );
};

export default HomeIcon;
