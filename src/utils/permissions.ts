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

export const requestStorageAndroid = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ]);
    const readGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    const writeGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
    if (readGranted || writeGranted) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};
