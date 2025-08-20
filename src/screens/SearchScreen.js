// src/screens/SearchScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, FlatList } from "react-native";
import { searchProducts } from "../api/woocommerce";
import ProductCard from "../components/ProductCard";
import { primary, text, muted } from "../theme";

export default function SearchScreen({ navigation }) {
  const [q, setQ] = useState("");
  const [list, setList] = useState([]);

  const onSearch = async (val) => {
    setQ(val);
    if (val.length < 2) return;
    try {
      const { data } = await searchProducts(val);
      setList(data || []);
    } catch (e) {
      console.log("Search error:", e?.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", color: text }}>Szukaj produktów</Text>
        <TextInput
          placeholder="Nazwa produktu…"
          value={q}
          onChangeText={onSearch}
          style={{ borderWidth: 1, borderColor: muted, borderRadius: 10, padding: 12, marginTop: 12 }}
          autoFocus
        />
      </View>
      <FlatList
        contentContainerStyle={{ padding: 16 }}
        data={list}
        keyExtractor={(i) => String(i.id)}
        renderItem={({ item }) => (
          <ProductCard item={item} onPress={() => navigation.navigate("Product", { id: item.id })} />
        )}
      />
    </SafeAreaView>
  );
}
