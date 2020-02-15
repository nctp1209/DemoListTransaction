import * as React from 'react'
import { BackHandler, Platform, View } from 'react-native'
import AppNavigation from './RootNavigator'

import { navigationService } from '../Services'

class MainNavigation extends React.Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', () => {
        // Handle Back button press
      })
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener("hardwareBackPress", undefined)
    }
  }

  render() {
    return (
      <AppNavigation
        ref={navigatorRef => {
          navigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default MainNavigation;
