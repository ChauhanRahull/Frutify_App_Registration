import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductDetailScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* Back and Share Icons */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' }}>
                {/*<TouchableOpacity onPress={() => navigation.goBack()}>*/}
                {/*    <Ionicons name="arrow-back" size={25} color="#000" />*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity>*/}
                {/*    <Ionicons name="share-outline" size={25} color="#000" />*/}
                {/*</TouchableOpacity>*/}
            </View>

            {/* Product Image */}
            <Image
                source={{ uri: "https://media.istockphoto.com/id/185071735/photo/red-apple-with-droplet.webp?a=1&b=1&s=612x612&w=0&k=20&c=s8eO5QHxyrQuU-0I3FuOmLq2mrKdR9tl-OLa8nGpBEQ=" }}
                style={{ width: '100%', height: 250, resizeMode: 'contain' }}
            />

            {/* Product Details */}
            <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Natural Apple</Text>
                <Text style={{ fontSize: 14, color: '#888' }}>1kg, Price</Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 5 }}>$4.99</Text>
            </View>

            {/*/!* Favorite Button *!/*/}
            {/*<TouchableOpacity style={{ position: 'absolute', top: 80, right: 15 }}>*/}
            {/*    <Ionicons name="heart-outline" size={28} color="black" />*/}
            {/*</TouchableOpacity>*/}

            {/* Expandable Sections */}
            <ScrollView style={{ marginTop: 10 }}>
                {renderSection("Product-Details")}
                {renderSection("Nutritions")}
                {renderSection("Reviews")}
            </ScrollView>

            {/* Add to Basket Button */}
            <TouchableOpacity
                style={{
                    backgroundColor: 'green',
                    padding: 15,
                    alignItems: 'center',
                    borderRadius: 10,
                    margin: 15
                }}
                onPress={() => alert("Added to Basket!")}
            >
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Add to Basket</Text>
            </TouchableOpacity>
        </View>
    );
};

// Function to render sections
const renderSection = (title) => (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#eee'
        }}
    >
        <Text style={{ fontSize: 16 }}>{title}</Text>
        <Ionicons name="chevron-forward" size={20} color="#888" />
    </TouchableOpacity>
);

export default ProductDetailScreen;
