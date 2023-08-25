import { Dimensions, StyleSheet } from "react-native";
import { Color } from "../constant/Color";

export const GlobalsS = StyleSheet.create({
  globalContainer: {
    height: Dimensions.get("screen").height,
    backgroundColor: Color.background,
  },
});
