import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const API = "192.168.0.104:3000/api/user/login";

export default function RegisterUser({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retype, setRetype] = useState("");
  const [resRegister, setResRegister] = useState();
  async function postNewUser(){
    {
      if (
        username.length == 0 ||
        password.length == 0 ||
        retype.length == 0 ||
        username.length < 5 ||
        password.length < 5 ||
        retype.length < 5
      ) {
        Alert.alert("Vui lòng nhập đầy đủ các trường");
      } else if (password !== retype) {
        Alert.alert("Vui lòng nhập mật khẩu trùng nhau");
      } else {
       let responce = await fetch("http://192.168.0.104:3000/api/user/register", {
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
        let json = await responce.json();
        setResRegister(json)
        console.log(resRegister)
        if (resRegister.status == "failed") {
          setUsername("");
          setPassword("");
          setResRegister("");
          setRetype("");
          Alert.alert(resRegister.msg);
        } else {
          setUsername("");
          setPassword("");
          setResRegister("");
          setRetype("");
          Alert.alert(resRegister.status);
          navigation.navigate("LoginUser");
        }
      }
    }
  }
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
        <Text style={{ marginRight: 20 }}>Username</Text>
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
        <Text style={{ marginRight: 20 }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
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
        <Text style={{ marginRight: 20 }}> Retype </Text>
        <TextInput
          value={retype}
          secureTextEntry={true}
          onChangeText={(text) => setRetype(text)}
          style={{
            borderWidth: 1,
            borderColor: "black",
            width: 300,
            paddingLeft: 10,
          }}
        />
      </View>
      <Button
        title="Register"
        onPress={() => postNewUser()}
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
