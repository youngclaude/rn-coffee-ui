import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import COLORS from "../config/colors";
import React, { useEffect, useState } from "react";
import SPACING from "../config/spacing";
import spacing from "../config/spacing";
import { useNavigation, useRoute } from "@react-navigation/native";
// import COFFEE_DATA from "./app/config/coffees";

const CoffeeDetailsScreen = () => {
  // console.log("dims", Dimensions.get("screen"));
  const { width: deviceWidth, height: deviceHeight } = Dimensions.get("screen");
  const navigationHook = useNavigation();
  const routeHook = useRoute();

  const [selectedCoffee, setSelectedCoffee] = useState(
    routeHook.params.coffeeObj
  );

  const drinkSizes = ["S", "M", "L"];

  useEffect(() => {
    // console.log({ selectedCoffee });
    console.log("routeHook.params.coffeeIObj", routeHook.params.coffeeObj.name);

    return () => {
      // second
    };
  }, []);

  return (
    // <View></View>
    <ScrollView
      style={{
        backgroundColor: COLORS.dark,
        flex: 1,
      }}
    >
      <SafeAreaView>
        <ImageBackground
          source={selectedCoffee.image}
          style={{
            height: deviceHeight / 2 + SPACING * 2,
            width: deviceWidth,
            justifyContent: "space-between",
          }}
          imageStyle={{ borderRadius: SPACING * 3 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: SPACING * 2,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.dark,
                padding: SPACING,
                borderRadius: SPACING * 1.5,
              }}
              onPress={() => {
                navigationHook.goBack();
              }}
            >
              <Ionicons
                name="arrow-back"
                color={COLORS.light}
                size={SPACING * 3}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.dark,
                padding: SPACING,
                borderRadius: SPACING * 1.5,
              }}
            >
              <Ionicons name="heart" color={COLORS.light} size={SPACING * 3} />
            </TouchableOpacity>
          </View>
          <View style={{ borderRadius: SPACING * 2, overflow: "hidden" }}>
            <BlurView style={{ padding: SPACING * 2 }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SPACING * 2,
                  fontWeight: "600",
                }}
              >
                {selectedCoffee.name}
              </Text>
              <Text>{selectedCoffee.included}</Text>
            </BlurView>
          </View>
        </ImageBackground>

        <View
          style={{ marginVertical: SPACING * 2, paddingHorizontal: SPACING }}
        >
          <Text style={{ color: COLORS["dark-light"], fontSize: SPACING * 2 }}>
            Description
          </Text>
          <Text style={{ color: COLORS.light }}>
            {selectedCoffee.description}
          </Text>
        </View>

        <View
          style={{ marginVertical: SPACING * 2, paddingHorizontal: SPACING }}
        >
          <Text style={{ color: COLORS["dark-light"], fontSize: SPACING * 2 }}>
            Sizes
          </Text>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            {drinkSizes.map((size, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  borderColor: COLORS.primary,
                  borderWidth: SPACING / 3,
                  paddingHorizontal: SPACING * 2,
                  paddingVertical: SPACING * 1.3,
                  borderRadius: SPACING,
                }}
              >
                <Text style={{ color: COLORS["light"] }}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: SPACING * 2,
          }}
        >
          <Text style={{ color: COLORS.light, fontSize: SPACING * 2.5 }}>
            $ {selectedCoffee.price}
          </Text>
          <TouchableOpacity
            style={{
              width: 200,
              height: 30,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SPACING,
            }}
          >
            <Ionicons name="add" size={SPACING * 2} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({});
