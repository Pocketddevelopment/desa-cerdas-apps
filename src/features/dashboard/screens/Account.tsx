import Separator from '@components/Separator';
import DeviceContants from '@constants/device';
import AccountCard from '@dashboard/components/AccountCard';
import ScrollItem from '@dashboard/components/ScrollItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DashboardStackParamList } from '..';

const AccountScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  function onPressItem(target: keyof DashboardStackParamList) {
    navigation.navigate(target);
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
            onPress={() => onPressItem('UpdatePassword')}
          />
          <Separator />
          <ScrollItem
            icon={require('@assets/account/tnc.webp')}
            title='Kebijakan Privasi'
            onPress={() => onPressItem('UpdatePassword')}
          />
          <Separator />
          <ScrollItem
            icon={require('@assets/account/tnc.webp')}
            title='Tentang Desa Cerdas'
            onPress={() => onPressItem('UpdatePassword')}
          />
          <Separator />
          <ScrollItem
            icon={require('@assets/account/tnc.webp')}
            title='Keluar dari Akun'
            textStyle={{ color: 'red' }}
            onPress={() => onPressItem('UpdatePassword')}
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
