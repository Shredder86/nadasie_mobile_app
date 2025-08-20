// src/screens/HomeScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import { getProducts } from "../api/woocommerce";
import ProductCard from "../components/ProductCard";
import { primary, text } from "../theme";

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProducts();
        setList(data || []);
      } catch (e) {
        console.log("Products error:", e?.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "700", color: text }}>NaDaSie – Produkty</Text>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Text style={{ color: primary, fontWeight: "700" }}>Szukaj</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Text style={{ color: primary, fontWeight: "700" }}>Koszyk</Text>
          </TouchableOpacity>
        </View>
      </View>

      {loading ? (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color={primary} />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{ padding: 16 }}
          data={list}
          keyExtractor={(i) => String(i.id)}
          renderItem={({ item }) => (
            <ProductCard item={item} onPress={() => navigation.navigate("Product", { id: item.id })} />
          )}
        />
      )}
    </SafeAreaView>
  );
}
