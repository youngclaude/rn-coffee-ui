import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import COFFEE_DATA from "./app/config/coffees";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        style={styles.container}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={CoffeeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// <View style={styles.container}>
//   {/* <HomeScreen /> */}
//   <CoffeeDetailsScreen selectedCoffee={COFFEE_DATA[1]} />
//   {/* <Text>Open up App.js to start working on your app!</Text> */}
//   {/* <StatusBar style="auto" /> */}
// </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dark,
  },
});
