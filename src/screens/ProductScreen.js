// src/screens/ProductScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { getProduct } from "../api/woocommerce";
import { useCart } from "../context/CartContext";
import { primary, text, muted } from "../theme";

export default function ProductScreen({ route, navigation }) {
  const { id } = route.params || {};
  const [product, setProduct] = useState(null);
  const { add } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProduct(id);
        setProduct(data);
      } catch (e) {
        console.log("Product error:", e?.message);
      }
    })();
  }, [id]);

  if (!product) return null;

  const img = product?.images?.[0]?.src;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {img ? (
          <Image source={{ uri: img }} style={{ width: "100%", height: 280, borderRadius: 12 }} />
        ) : (
          <View style={{ width: "100%", height: 280, backgroundColor: muted, borderRadius: 12 }} />
        )}
        <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 12, color: text }}>{product.name}</Text>
        <Text style={{ fontSize: 18, fontWeight: "800", marginTop: 8, color: primary }}>{product.price} PLN</Text>
        <Text style={{ marginTop: 12 }}>{product.short_description?.replace(/<[^>]*>?/gm, "") || ""}</Text>
      </ScrollView>

      <View style={{ padding: 16, borderTopWidth: 1, borderTopColor: "#eee" }}>
        <TouchableOpacity
          onPress={() => add(product, 1)}
          style={{ backgroundColor: primary, padding: 14, borderRadius: 12, alignItems: "center" }}
        >
          <Text style={{ color: "#fff", fontWeight: "700" }}>Dodaj do koszyka</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={{ marginTop: 10, padding: 12, alignItems: "center" }}
        >
          <Text style={{ color: text, fontWeight: "600" }}>Przejdź do koszyka</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
