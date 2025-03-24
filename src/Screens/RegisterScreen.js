import axios from 'axios';
import React, { useState } from 'react';
import {
    StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, ImageBackground, Alert
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'; // For show/hide password icon

function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Validation functions
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const isValidMobile = (mobile) => /^[0-9]{10}$/.test(mobile);
    const isValidPassword = (password) => password.length >= 6;

    function handleSubmit() {
        if (!name || !email || !mobile || !password) {
            Alert.alert("Error", "All fields are required!");
            return;
        }

        if (!isValidEmail(email)) {
            Alert.alert("Error", "Invalid email format!");
            return;
        }

        if (!isValidMobile(mobile)) {
            Alert.alert("Error", "Mobile number must be 10 digits!");
            return;
        }

        if (!isValidPassword(password)) {
            Alert.alert("Error", "Password must be at least 6 characters!");
            return;
        }

        const UserData = { name, email, mobile, password };
        const URL = "http://10.0.2.2:3001/Register";
        // Change if using an emulator

        axios.post(URL, UserData, { timeout: 5000 })
            .then(res => {
                console.log(res.data);
                if (res.data.status === 'ok') {
                    Alert.alert("Success", "Registered Successfully!");
                    props.navigation.navigate('Second');
                } else {
                    Alert.alert("Error", res.data.message || "Registration failed");
                }
            })
            .catch(err => {
                console.error("Axios Error:", err.message);
                Alert.alert("Error", "Cannot connect to the server. Check your network or backend.");
            });
    }


    return (
        <ImageBackground
            source={require('../assets/back-orange.jpg')}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>

                {/* Back Button */}
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.backButton}>
                    <AntDesign name="arrowleft" size={24} color="#fff" />
                </TouchableOpacity>

                {/* Header */}
                <Text style={styles.title}>🍊 Welcome to Fruit Store</Text>
                <Text style={styles.subtitle}>Create your account to get fresh fruits at your doorstep!</Text>

                {/* Input Fields */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        placeholderTextColor="#444"
                        value={name}
                        onChangeText={setName}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#444"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Mobile"
                        placeholderTextColor="#444"
                        value={mobile}
                        onChangeText={setMobile}
                        keyboardType="phone"
                    />

                    {/* Password Field with Show/Hide Feature */}
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Password"
                            placeholderTextColor="#444"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                            <Feather name={showPassword ? "eye" : "eye-off"} size={20} color="#444" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Register Button */}
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Register 🍍</Text>
                </TouchableOpacity>

            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        padding: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#eee',
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 30,
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        width: '100%',
        padding: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 16,
        color: '#000',
    },
    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 12,
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 12,
        color: '#000',
    },
    eyeIcon: {
        padding: 10,
    },
    button: {
        backgroundColor: '#FF5733',
        paddingVertical: 15,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
        marginTop: 15,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default RegisterScreen;
