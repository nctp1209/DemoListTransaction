import { Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Header from "../Components/Header/Header";

import MainScreen from "../Containers/Main/MainViewContainer";

import RouterConstant from "./RouteConstant";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    // Default config for all screens
    headerMode: Platform.OS === "ios" ? "float" : "screen",
    initialRouteName: RouterConstant.Main,
    cardStyle: { shadowColor: "transparent" },
    navigationOptions: {
      gesturesEnabled: Platform.OS === "ios"
    }
  }
);

export default createAppContainer(PrimaryNav);
