import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../components/welcome/Welcome";
import Login from "../components/login/Login";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="login"
    >
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
