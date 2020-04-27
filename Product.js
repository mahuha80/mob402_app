import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
const productAPI = "http://192.168.0.104:3000/api/product/getAllProducts";
const base = "http://192.168.0.104:3000/";
async function getProductFromAPI() {
  try {
    let response = await fetch(productAPI);
    let json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
  }
}

function Item({ image ,name,price,type}) {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: base + image }}
        style={{ width: 200, height: 100 }}
      ></Image>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{type}</Text>

    </View>
  );
}

export default function Product() {
  const [data, setData] = useState();
  useEffect(() => {
    getProductFromAPI().then((data) => setData(data));
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item image={item.image} name={item.name} price={item.price} type={item.type} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
