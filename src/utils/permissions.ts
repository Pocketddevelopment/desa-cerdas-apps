import { Permission, PermissionsAndroid } from 'react-native';

export const requestAndroidOnly = async (
  permission: Permission
): Promise<boolean> => {
  try {
    const granted = await PermissionsAndroid.request(permission, {
      title: 'Desa Cerdas',
      message: 'Unduh Dokumen',
      buttonNeutral: 'Tanyakan Nanti',
      buttonNegative: 'Batal',
      buttonPositive: 'OK',
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};
