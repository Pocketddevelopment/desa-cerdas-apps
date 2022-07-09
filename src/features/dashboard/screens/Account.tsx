import { AuthContext } from '@@@/App';
import { logoutThunk } from '@authentication/models/thunks';
import Separator from '@components/Separator';
import DeviceContants from '@constants/device';
import AccountCard from '@dashboard/components/AccountCard';
import ScrollItem from '@dashboard/components/ScrollItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch } from '@store/hooks';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DashboardStackParamList } from '..';

const AccountScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const dispatch = useAppDispatch();
  const { logOut }: any = React.useContext(AuthContext);

  function onPressItem(target: keyof DashboardStackParamList, params?: any) {
    navigation.navigate(target, {
      title: params?.title,
      uri: params?.uri,
    });
  }

  function logout() {
    dispatch(logoutThunk());
    logOut();
    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperAbsolute} />
      <View>
        <AccountCard />
        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.bodyContainer}>
          <ScrollItem
            icon={require('@assets/account/password.webp')}
            title='Ganti Password'
            onPress={() => onPressItem('UpdatePassword')}
          />
          <Separator />
          <ScrollItem
            icon={require('@assets/account/tnc.webp')}
            title='Syarat dan Ketentuan'
            onPress={() => onPressItem('TermsCondition')}
          />
          <Separator />
          <ScrollItem
            icon={require('@assets/account/pp.webp')}
            title='Kebijakan Privasi'
            onPress={() => onPressItem('PrivacyPolicy')}
          />
          <Separator />
          <ScrollItem
            icon={require('@assets/account/about.webp')}
            title='Tentang Desa Cerdas'
            onPress={() =>
              onPressItem('WebView', {
                title: 'Tentang Desa Cerdas',
                uri: 'http://13.250.44.36:8001/WebDesaCerdas/index.html',
              })
            }
          />
          <Separator />
          <ScrollItem
            icon={require('@assets/account/logout.webp')}
            title='Keluar dari Akun'
            textStyle={{ color: 'red' }}
            onPress={logout}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: 'white',
  },
  upperAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 120,
    width: DeviceContants.screenWidth,
    backgroundColor: 'red',
  },
  body: {
    flex: 1,
  },
  bodyContainer: {
    paddingTop: 20,
  },
});
