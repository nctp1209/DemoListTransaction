import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Navigator from "../Navigation/Navigator";

import { width, modalHeaderMargin } from "../Themes/dimension";
import colors from "../Themes/colors";

class RootContainer extends Component {
  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerMarginStyle} />
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  applicationView: { flex: 1 },
  headerMarginStyle: {
    width,
    height: modalHeaderMargin,
    backgroundColor: colors.headerBarColor
  }
});

export default RootContainer
