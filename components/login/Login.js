import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GlobalsS } from "../GlobalesS";
import { LoginS } from "./StylesL";

const Login = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={GlobalsS.globalContainer}>
          <Text>Login</Text>
          <View style={LoginS.writezone}>
            <View>
              <TextInput style={GlobalsS.textinput} placeholder="Email" />
              <TextInput style={GlobalsS.textinput} placeholder="Password" />
              <TouchableOpacity>
                <Text style={GlobalsS.textColor}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;
