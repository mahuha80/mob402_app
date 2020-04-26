import React from "react";
import { StyleSheet, Text, View ,TextInput,Button} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const API = '192.168.0.104:3000/api/user/login';

export default function RegisterUser({navigation}) {
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
          <Text style={{ marginRight: 20 }}>Password</Text>
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
          <Text style={{ marginRight: 20 }}>Retype     </Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: "black", width: 300 }}
          />
        </View>
        <Button title="Register" onPress={() => {
          navigation.navigate('Home')
        }} />
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
