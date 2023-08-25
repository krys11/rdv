import { View, Text } from "react-native";
import React from "react";
import { GlobalsS } from "../GlobalesS";
import { Color } from "../../constant/Color";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={GlobalsS.globalContainer}>
        <Text>Welcome</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Welcome;
