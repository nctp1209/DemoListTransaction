import { Dimensions, Platform } from 'react-native'
const { width, height } = Dimensions.get('window')

const isIphoneX = Platform.OS === 'ios' && (height > 800)

export default {
  width,
  height,
  headerPadding: isIphoneX ? 45 : Platform.OS === 'ios' ? 20 : 0,
  isIphoneX
}
