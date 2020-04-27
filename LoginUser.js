import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const API = "192.168.0.104:3000/api/user/login";

export default function LoginUser({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resLogin, setResLogin] = useState("");

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
          onChangeText={(text) => setUsername(text)}
          value={username}
          style={{
            borderWidth: 1,
            borderColor: "black",
            width: 300,
            paddingLeft: 10,
          }}
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
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          value={password}
          style={{
            borderWidth: 1,
            borderColor: "black",
            width: 300,
            paddingLeft: 10,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <Button
          style={{}}
          title="Login"
          onPress={() => {
            if (
              username.length == 0 ||
              password.length == 0 ||
              username.length < 5 ||
              password.length < 5
            ) {
              Alert.alert("Vui lòng nhập đầy đủ các trường");
              return false;
            } else {
              fetch("http://192.168.0.104:3000/api/user/login", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: `${username}`,
                  password: `${password}`,
                }),
              })
                .then((response) => response.json())
                .then((json) => setResLogin(json));
              if (resLogin.length == 0) {
                Alert.alert("Waiting ...");
              } else {
                if (resLogin.token == "" && resLogin.username == "") {
                  Alert.alert("Sai tài khoản hoặc mật khẩu");
                  setResLogin("");
                  setUsername("");
                  setPassword("");
                } else {
                  setResLogin("");
                  setUsername("");
                  setPassword("");
                  navigation.navigate("Home");
                }
              }
            }
          }}
        />
        <Text> </Text>
        <Button
          style={{}}
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
