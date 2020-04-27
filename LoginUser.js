import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const API = "192.168.0.104:3000/api/user/login";

export default function LoginUser({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resLogin, setResLogin] = useState("");
  async function postLogin() {
    {
      let response = await fetch("http://192.168.0.104:3000/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: `${username}`,
          password: `${password}`,
        }),
      });
      let json = await response.json();
      setResLogin(json);
      if (resLogin.username == "") {
        setUsername("");
        setPassword("");
        setResLogin("");
        Alert.alert("Sai tài khoản hoặc mật khẩu");
      } else {
        setUsername("");
        setPassword("");
        setResLogin("");
        navigation.navigate("Home");
      }
    }
  }
const showButton = ()=> {
    if (
      username.length == 0 ||
      password.length == 0 ||
      username.length < 5 ||
      password.length < 5
    ) {
      Alert.alert("Vui lòng nhập đầy đủ các trường");
    } else {
      postLogin();
  }
};
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
          value={username}
          onChangeText={(text) => setUsername(text)}
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
          value={password}
          onChangeText={(txt) => setPassword(txt)}
          secureTextEntry={true}
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
          onPress={() =>showButton()}
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
