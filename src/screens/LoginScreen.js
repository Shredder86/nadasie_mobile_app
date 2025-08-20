// src/screens/LoginScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { primary, text, muted } from "../theme";

// MVP – placeholder formularza logowania (integrację z WP JWT można dodać później)
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "700", color: text }}>Logowanie</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ borderWidth: 1, borderColor: muted, borderRadius: 10, padding: 12, marginTop: 16 }}
      />
      <TextInput
        placeholder="Hasło"
        value={pass}
        onChangeText={setPass}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: muted, borderRadius: 10, padding: 12, marginTop: 8 }}
      />

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: primary, padding: 14, borderRadius: 12, alignItems: "center", marginTop: 16 }}
      >
        <Text style={{ color: "#fff", fontWeight: "700" }}>Zaloguj (placeholder)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
