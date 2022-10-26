import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../config/spacing";
import CATAGORIES_DATA from "../config/categories";
import COLORS from "../config/colors";

const Catagories = ({ activeCatId, handlePress }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignContent: "space-between",
        width: "100%",
      }}
    >
      {/* <Text>Catagories</Text> */}
      {/* <View style={{ flexDirection: "row" }}> */}
      <FlatList
        data={CATAGORIES_DATA}
        // columnWrapperStyle={{ width: "100%" }}
        sty
        // style={{ flexDirection: "row", paddingRight: SPACING, width: "100%" }}
        horizontal
        renderItem={({ item }) => {
          const isNodeActive = activeCatId !== item.id;
          return (
            <TouchableOpacity onPress={() => handlePress(item.id)}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: SPACING * 3,
                }}
              >
                <Text
                  style={[
                    {},
                    isNodeActive
                      ? { color: COLORS.light }
                      : { color: COLORS.primary },
                  ]}
                >
                  {item.name}
                </Text>
                <Ionicons
                  name="chevron-down-sharp"
                  size={24}
                  color={isNodeActive ? COLORS.light : COLORS.primary}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* </View> */}
    </View>
  );
};

export default Catagories;

const styles = StyleSheet.create({});
