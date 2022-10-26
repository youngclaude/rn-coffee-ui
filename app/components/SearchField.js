import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../config/spacing";
import COLORS from "../config/colors";

const SearchField = () => {
  return (
    <View style={{ color: "white", padding: SPACING - 4, overflow: "hidden" }}>
      <BlurView
        intensity={30}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <TextInput
          style={{
            width: "100%",
            color: COLORS.white,
            padding: SPACING,
            fontSize: SPACING * 1.7,
            paddingLeft: SPACING * 3.5,
          }}
          placeholder="Find your coffee.."
          placeholderTextColor={COLORS.light}
        />
        <Ionicons
          name="search"
          color={COLORS.light}
          size={SPACING * 2}
          style={{ position: "absolute", left: SPACING / 2 }}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
