// src/screens/CartScreen.js
import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { useCart } from "../context/CartContext";
import { primary, text } from "../theme";

export default function CartScreen({ navigation }) {
  const { items, remove, clear, total } = useCart();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 16, flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18, fontWeight: "700", color: text }}>Koszyk</Text>
        <TouchableOpacity onPress={clear}>
          <Text style={{ color: primary, fontWeight: "700" }}>Wyczyść</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        keyExtractor={(i) => String(i.product.id)}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={<Text>Brak produktów w koszyku.</Text>}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 10, borderBottomWidth: 1, borderColor: "#eee" }}>
            <Text style={{ fontWeight: "600" }}>{item.product.name}</Text>
            <Text>{item.qty} × {item.product.price} PLN</Text>
            <TouchableOpacity onPress={() => remove(item.product.id)} style={{ marginTop: 6 }}>
              <Text style={{ color: primary, fontWeight: "700" }}>Usuń</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={{ padding: 16, borderTopWidth: 1, borderColor: "#eee" }}>
        <Text style={{ fontSize: 16, fontWeight: "700" }}>Razem: {total.toFixed(2)} PLN</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Checkout")}
          style={{ backgroundColor: primary, padding: 14, borderRadius: 12, alignItems: "center", marginTop: 12 }}
        >
          <Text style={{ color: "#fff", fontWeight: "700" }}>Przejdź do zamówienia</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
