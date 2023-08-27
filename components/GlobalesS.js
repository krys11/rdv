import { Dimensions, StyleSheet } from "react-native";
import { Color } from "../constant/Color";

export const GlobalsS = StyleSheet.create({
  globalContainer: {
    height: Dimensions.get("screen").height,
    backgroundColor: Color.backgroundContainer,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  inputView: {
    width: "80",
  },
  textinput: {
    backgroundColor: Color.inputColor,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginTop: 10,
    height: 50,
  },
});
