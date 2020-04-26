import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const API = "192.168.0.104:3000/api/user/login";

export default function LoginUser({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ marginRight: 10 }}>Username</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: "black", width: 300 }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ marginRight: 10 }}>Password</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: "black", width: 300 }}
        />
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'stretch'}}>
      <Button
        style={{}}
        title="Login"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Text>          </Text>
      <Button
        style={{ }}
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      </View>
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
