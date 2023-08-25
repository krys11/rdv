import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../components/welcome/Welcome";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="welcome"
    >
      <Stack.Screen name="welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
