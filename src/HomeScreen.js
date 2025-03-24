import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import HomeIcon from "./Screens/HomeIcon";
import HomeSearch from './Screens/HomeSearch';
import HomeBanner from './Screens/HomeBanner';
import ProductsTitle from './Screens/ProductsTitle';
import ProductsCarousel from './Screens/ProductsCarousel';


const HomeScreen = () => {
    return (
        <SafeAreaView
            style={{
                paddingHorizontal: 20,
                paddingTop: 10,
                flex: 1,
                backgroundColor: "white",
            }}
        >
            <ScrollView style={{ flex: 1 }}>
                <View style={{ gap: 20 }}>
                    <HomeIcon />
                    <HomeSearch />
                    <HomeBanner />
                    <ProductsTitle title="Exclusive Offer" />
                    <ProductsCarousel />
                    <ProductsTitle title="Best Selling" />
                    <ProductsCarousel />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
