import { isIphoneXorAbove } from '@utils/device-helper';
import { Dimensions, Platform } from 'react-native';

export default class DeviceContants {
  /**
   * Device Constants
   */
  static screenWidth: number = Dimensions.get('screen').width;
  static screenHeight: number = Dimensions.get('screen').height;

  /**
   * Boolean Constants
   */
  static isAndroid: boolean = Platform.OS === 'android';
  static isIos: boolean = Platform.OS === 'ios';
  static isIphoneXorAbove: boolean = isIphoneXorAbove();
}
