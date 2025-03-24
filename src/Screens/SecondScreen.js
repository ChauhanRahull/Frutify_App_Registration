import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from "axios";

export default function SecondScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit() {
        if (!email || !password) {
            setError("All fields are required!");
            return;
        }
        setError('');

        const userData = { email, password };
        console.log("Sending Login Request:", userData);  // Debugging log

        const URL = "http://10.0.2.2:3001/login-user";

        axios.post(URL, userData, { timeout: 5000 })
            .then(res => {
                console.log("Login Response:", res.data);
                if (res.data.status === "ok") {
                    navigation.navigate('Third');
                } else {
                    setError("Invalid credentials");
                }
            })
            .catch(error => {
                console.error("Login Error:", error.response ? error.response.data : error.message);
                if (error.response && error.response.status === 401) {
                    setError("Invalid email or password. Please try again.");
                } else {
                    setError("Unable to connect. Check your network.");
                }
            });
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
            <StatusBar barStyle="dark-content" backgroundColor="#f4f4f4" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                        <View style={styles.container}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                <AntDesign name="arrowleft" size={24} color="#000" />
                            </TouchableOpacity>
                            <Text style={styles.title}>Welcome Back!</Text>
                            <Text style={styles.subtitle}>Login to continue!!</Text>
                            <TextInput
                                label="Email"
                                mode="outlined"
                                value={email}
                                onChangeText={setEmail}
                                style={styles.input}
                                left={<TextInput.Icon name={() => <MaterialIcons name="email" size={20} color="#555" />} />}
                            />
                            <TextInput
                                label="Password"
                                mode="outlined"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                                style={styles.input}
                                left={<TextInput.Icon name={() => <MaterialIcons name="lock" size={20} color="#555" />} />}
                            />
                            {error ? <HelperText type="error">{error}</HelperText> : null}
                            <Button mode="contained" onPress={handleSubmit} style={styles.button}>Login Now</Button>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.registerText}>Create New Account</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#777',
        marginBottom: 20,
    },
    input: {
        marginBottom: 15,
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    registerText: {
        textAlign: 'center',
        marginTop: 15,
        color: '#007bff',
    },
});
