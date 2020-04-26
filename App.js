import React from "react";
import { StyleSheet, Text, View,TextInput,Button } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './LoginUser'
import Home from './Home'
import Register from './RegisterUser'
const Stack = createStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="LoginUser" component={LoginScreen} options={{title:'Login'}}/>
       <Stack.Screen name="Home" component={Home} options={{title:'Home'}}/>
       <Stack.Screen name="Register" component={Register} options={{title:'Register'}}/>

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
  },
});
