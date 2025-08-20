// src/components/ProductCard.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { primary, muted, text } from "../theme";

export default function ProductCard({ item, onPress }) {
  const img = item?.images?.[0]?.src;
  return (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: "#fff", borderRadius: 12, overflow: "hidden", borderWidth: 1, borderColor: muted, marginBottom: 12 }}>
      {img ? (
        <Image source={{ uri: img }} style={{ width: "100%", height: 160 }} resizeMode="cover" />
      ) : (
        <View style={{ width: "100%", height: 160, backgroundColor: muted }} />
      )}
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", color: text }} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={{ marginTop: 6, fontSize: 16, fontWeight: "700", color: primary }}>
          {item.price} PLN
        </Text>
      </View>
    </TouchableOpacity>
  );
}
