import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
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

function Item({ image, name, price, type }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <Image
        source={{ uri: base + image }}
        style={{
          width: 100,
          height: 100,
          marginRight: 70,
          marginTop: 10,
          alignSelf: "flex-end",
        }}
      ></Image>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: 40,
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 25,fontWeight:'bold',color:'#545478' }}>{name}</Text>
        <Text style={{color:'blue',marginBottom:10}}>{price}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 30,
          }}
        >
          <TouchableOpacity style={styles.quanityBtn}>
            <Text style={styles.quanityText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={{
              width: 50,
              height: 20,
              backgroundColor: "white",
              borderWidth: 0.4,
              borderColor: "#a5a5c0",
            }}
            editable={false}
          ></TextInput>
          <TouchableOpacity style={styles.quanityBtn}>
            <Text style={styles.quanityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
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
        renderItem={({ item ,index}) => (
          <Item
            image={item.image}
            name={item.name}
            price={item.price}
            type={item.type}
          />
        )}
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
  quanityText: {
    color: "#a5a5c0",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  quanityBtn: {
    backgroundColor: "white",
    borderWidth: 0.4,
    borderColor: "#a5a5c0",
    height:20
  },
});
