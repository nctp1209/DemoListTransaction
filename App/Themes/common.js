import { StyleSheet, StatusBar, Platform } from 'react-native';

import colors from './colors';
import dimension from './dimension';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.select({
      ios: 0,
      android: StatusBar.currentHeight
    }),
    paddingBottom: Platform.select({
      ios: dimension.isIphoneX ? 20 : 0,
      android: 0
    })
  },
  centered: { justifyContent: 'center', alignItems: 'center' },
  rowCentered: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  shadow: {
    shadowColor: '#ded9e7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 4
  },
  border: { borderWidth: 1, borderColor: colors.borderColor },
  borderBottom: { borderBottomWidth: 1, borderBottomColor: colors.borderColor },
  borderTop: { borderTopWidth: 1, borderTopColor: colors.borderColor },
  avatar: { width: 50, height: 50, borderRadius: 25, resizeMode: 'cover' }
});
