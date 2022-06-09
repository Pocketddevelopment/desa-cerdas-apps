import Separator from '@components/Separator';
import DeviceContants from '@constants/device';
import AccountCard from '@dashboard/components/AccountCard';
import ScrollItem from '@dashboard/components/ScrollItem';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

const AccountScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperAbsolute} />
      <View>
        <AccountCard />
        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.bodyContainer}>
          <ScrollItem icon='lock-open-outline' title='Ganti Password' />
          <Separator />
          <ScrollItem
            icon='file-document-outline'
            title='Syarat dan Ketentuan'
          />
          <Separator />
          <ScrollItem icon='shield-check-outline' title='Kebijakan Privasi' />
          <Separator />
          <ScrollItem
            icon='comment-question-outline'
            title='Tentang Desa Cerdas'
          />
          <Separator />
          <ScrollItem
            icon='logout'
            title='Keluar dari Akun'
            textStyle={{ color: 'red' }}
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
