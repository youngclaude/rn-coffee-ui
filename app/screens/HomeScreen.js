import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import SPACING from "../config/spacing";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import SearchField from "../components/SearchField";
import Catagories from "../components/Catagories";
import COLORS from "../config/colors";
// import coffees from "../config/coffees";
import COFFEE_DATA from "../config/coffees";
import { useNavigation } from "@react-navigation/native";
// import naviga

const userAvatar = require("../../assets/avatar.jpg");

const HomeScreen = () => {
  const [activeCatId, setActiveCatId] = useState(0);
  const navigationHook = useNavigation();

  const handleCategoryPress = (id) => {
    // console.log("test id:", item.id);
    setActiveCatId(id);
  };

  const handleProductPress = (id) => {
    // console.log({ id });
    navigationHook.navigate("Details", { coffeeObj: COFFEE_DATA[id - 1] });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.dark,
        flex: 1,
      }}
    >
      <ScrollView>
        <View
          style={{
            padding: SPACING,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* <Text>HomeScreen</Text> */}
          <TouchableOpacity
            style={{
              borderRadius: SPACING,
              overflow: "hidden",
              width: SPACING * 4,
              height: SPACING * 4,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="menu"
                size={SPACING * 2.5}
                color={COLORS.secondary}
              />
            </BlurView>
          </TouchableOpacity>
          <View
            style={{
              width: SPACING * 4,
              height: SPACING * 4,
              overflow: "hidden",
              borderRadius: SPACING,
            }}
          >
            <BlurView style={{ height: "100%" }}>
              <Image
                source={userAvatar}
                style={{ height: "100%", width: "100%" }}
              />
            </BlurView>
          </View>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 50, fontWeight: "600" }}>
            Find the best coffee for you
          </Text>
        </View>
        <SearchField />
        <View>
          <Catagories
            activeCatId={activeCatId}
            handlePress={handleCategoryPress}
          />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {COFFEE_DATA.filter((coffeeItem, index) => {
              if (coffeeItem.categoryId === activeCatId || activeCatId === 0) {
                return true;
              }
            }).map((coffee) => (
              <View
                key={coffee.id}
                style={{
                  width: 200,
                  //   height: 300,
                  marginBottom: SPACING,
                  borderRadius: SPACING * 2,
                  overflow: "hidden",
                }}
              >
                <BlurView
                  tint="dark"
                  intensity={90}
                  style={{ padding: SPACING }}
                >
                  <TouchableOpacity
                    style={{ height: 150, width: "100%" }}
                    onPress={() => handleProductPress(coffee.id)}
                  >
                    <Image
                      source={coffee.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: SPACING * 2,
                      }}
                    />
                    {/* Star Rating Section  */}
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        borderBottomStartRadius: SPACING * 3,
                        borderTopEndRadius: SPACING * 2,
                        overflow: "hidden",
                      }}
                    >
                      <BlurView
                        style={{
                          flexDirection: "row",
                          padding: SPACING - 2,
                          //   borderRadius: SPACING,
                        }}
                      >
                        <Ionicons
                          name="star"
                          size={SPACING * 1.7}
                          color={COLORS.primary}
                        />
                        <Text
                          style={{
                            flexDirection: "row",
                            marginLeft: SPACING / 2,
                          }}
                        >
                          {coffee.rating}
                        </Text>
                      </BlurView>
                    </View>
                  </TouchableOpacity>
                  {/* Product Title and subtitle */}
                  <View>
                    <Text style={{ color: COLORS.white }}>{coffee.name}</Text>
                    <Text style={{ color: COLORS.light }}>
                      {coffee.included}
                    </Text>
                  </View>
                  {/* Product Price and "Add to Cart" btn  */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: SPACING,
                      alignItems: "center",
                    }}
                  >
                    {/* Price Section  */}
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: COLORS.primary,
                          marginRight: SPACING / 2,
                          fontSize: SPACING * 1.6,
                        }}
                      >
                        $
                      </Text>
                      <Text style={{ color: "white" }}>{coffee.price}</Text>
                    </View>
                    {/* Add to cart Section  */}
                    <TouchableOpacity
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: COLORS.primary,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons
                        name="add"
                        size={SPACING * 2}
                        color={COLORS.white}
                      />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
