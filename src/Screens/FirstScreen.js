import React from 'react';
import {StyleSheet,StatusBar, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView, useColorScheme} from 'react-native';
import * as AppConstants from '../constants/AppConstants';
import {Colors} from "react-native/Libraries/NewAppScreen";

export default function FirstScreen(props) {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex:1
    };
  return (
      <SafeAreaView style={backgroundStyle}>
          <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
          />
          <View style={styles.backgroundColor}>
      <View style={styles.semicircle}>
      </View>
      <Image
        source={require('../assets/Shop1.png')}
        style={{
          height: AppConstants.pixelNormalize(343),
          width: AppConstants.pixelNormalize(305),
          marginTop: AppConstants.pixelNormalize(-200),
          marginLeft: AppConstants.pixelNormalize(34),
        }} />
      <View>
        <Text style={{
          marginTop: AppConstants.pixelNormalize(48),
          fontSize: AppConstants.pixelNormalize(23),
          textAlign: 'center',
          color: '#000000'
        }}>
          Buy Fresh & Orangic Fruits
          </Text>
      </View>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('Second');
      }}>
        <View style={styles.rectangle}>
          <Text style={{
            marginTop: AppConstants.pixelNormalize(15),
            marginLeft: AppConstants.pixelNormalize(70),
            fontSize: AppConstants.pixelNormalize(16),
            color: '#FFFFFF'
          }}>Start Shopping Now</Text>
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => {
          props.navigation.navigate('Second');
        }}>
          <Text style={{
            marginTop: AppConstants.pixelNormalize(24),
            marginLeft: AppConstants.pixelNormalize(161),
            fontSize: AppConstants.pixelNormalize(12),
            color: '#000000'
          }}>Skip intro</Text>
        </TouchableOpacity>
      </View>
    </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    height: AppConstants.pixelNormalize(55),
    width: AppConstants.pixelNormalize(277),
    marginTop: AppConstants.pixelNormalize(66),
    marginLeft: AppConstants.pixelNormalize(49),
    backgroundColor: '#FF3464',
    borderTopLeftRadius: AppConstants.pixelNormalize(20),
    borderBottomRightRadius: AppConstants.pixelNormalize(20),
  },
  semicircle: {
    width: AppConstants.pixelNormalize(380),
    height: AppConstants.pixelNormalize(380),
    borderRadius: AppConstants.pixelNormalize(300),
    marginTop: AppConstants.pixelNormalize(-100),
    marginLeft: AppConstants.pixelNormalize(100),
    backgroundColor: '#FFEFF3',
    opacity: 0.5
  },
  backgroundColor: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF'
  }
});
