import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { colors, fonts, dimension, commonStyles } from '../../Themes';
import { navigationService } from '../../Services';

export default class HeaderMainPage extends Component {
  static defaultProps = {
    title: 'Title',
    navigation: null
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerCaption}>{this.props.title}</Text>
        </View>
        <View style={styles.headerRightIcon}>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
  headerContainer: {
    ...commonStyles.border,
    paddingTop: dimension.headerPadding,
    height: 80 + dimension.headerPadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  headerLeftIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    padding: 20,
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  headerRightIcon: {
    flex: 1,
    alignItems: 'center',
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    resizeMode: 'cover',
    width: '100%'
  },
  headerCaption: {
    fontFamily: fonts.primaryBold,
    color: colors.primary,
    fontSize: 25,
  },
});
