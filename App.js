import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, Image, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

const Stack = createNativeStackNavigator();


const API_URL = "https://nadasie.pl/wp-json/wc/v3/products";
const CK = "ck_0bc5107b993e1a68d20da166ec06726c22d47399";
const CS = "cs_ec00a0acf4da9993243cfd30b0f2d3eb344dbdc8";


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/icon.png")}
        style={{ width: 120, height: 120, marginBottom: 20 }}
      />
      <Text style={styles.title}>NaDaSie.pl</Text>
      <Text style={styles.subtitle}>Zakupy ZERO WASTE</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Przejdź do produktów" onPress={() => navigation.navigate("Produkty")} />
      </View>
    </View>
  );
}


function ProductsScreen() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL, {
        auth: { username: CK, password: CS },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Błąd pobierania produktów:", err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="orange" />
        <Text>Ładowanie produktów...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.productCard}>
          {item.images.length > 0 && (
            <Image source={{ uri: item.images[0].src }} style={styles.productImage} />
          )}
          <Text style={styles.productName}>{item.name}</Text>
          <Text>{item.price} zł</Text>
        </View>
      )}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={HomeScreen} />
        <Stack.Screen name="Produkty" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "orange",
  },
  subtitle: {
    fontSize: 16,
    color: "green",
  },
  productCard: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 8,
    textAlign: "center",
  },
});
