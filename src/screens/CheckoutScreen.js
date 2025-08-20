// src/screens/CheckoutScreen.js
import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

// MVP: przekierowanie do koszyka/checkout WooCommerce w przeglądarce WebView
export default function CheckoutScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: "https://nadasie.pl/koszyk/" }} />
    </SafeAreaView>
  );
}
