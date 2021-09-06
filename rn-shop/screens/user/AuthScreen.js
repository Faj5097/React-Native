import React from "react";
import { View, ScrollView, Button, StyleSheet, KeyboardAvoidingView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import Colors from "../../constants/Colors";

const AuthScreen = (props) => {
    return <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.screen}>
        <LinearGradient colors={["#ffffff", "#ffe3ff"]} style={styles.gradient}>
            <Card style={styles.authContainer}>
                <ScrollView>
                    <Input
                        id="email"
                        label="E-Mail"
                        initialValue=""
                        required
                        email
                        autoCapitalize="none"
                        keyboardType="default"
                        onInputChange={() => { }}
                        errorText="Enter valid E-Mail Adress!"
                    />
                    <Input
                        id="password"
                        label="Password"
                        initialValue=""
                        required
                        email
                        autoCapitalize="none"
                        minLength={5}
                        keyboardType="default"
                        secureTextEntry
                        onInputChange={() => { }}
                        errorText="Enter valid Password!"
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Login" color={Colors.primary} onPress={() => { }} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Switch to SignUp" color={Colors.accent} onPress={() => { }} />
                    </View>
                </ScrollView>
            </Card>
        </LinearGradient>
    </KeyboardAvoidingView>
}

AuthScreen.navigationOptions = {
    headerTitle: "Authenticate"
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    authContainer: {
        width: "80%",
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
    },
    buttonContainer: {
        marginTop: 10
    }
});

export default AuthScreen;