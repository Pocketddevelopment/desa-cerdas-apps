import { isIphoneXorAbove } from '@utils/device-helper';
import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default class DeviceContants {
  /**
   * Device Constants
   */
  static screenWidth: number = Dimensions.get('screen').width;
  static screenHeight: number = Dimensions.get('screen').height;
  static DEVICE_ID: string = DeviceInfo.getUniqueId();
  static DEVICE_MODEL: string = `${DeviceInfo.getModel()} ${DeviceInfo.getSystemVersion()}`;
  static APP_VERSION: string = DeviceInfo.getReadableVersion();

  /**
   * Boolean Constants
   */
  static isAndroid: boolean = Platform.OS === 'android';
  static isIos: boolean = Platform.OS === 'ios';
  static isIphoneXorAbove: boolean = isIphoneXorAbove();
}
