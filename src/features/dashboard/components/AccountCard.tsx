import React from 'react';
import Row from '@components/Row';
import { Image, StyleSheet, View } from 'react-native';
import { Avatar, Button, Caption, Text, Title } from 'react-native-paper';
import DeviceContants from '@constants/device';
import Separator from '@components/Separator';
import ButtonShortcut from './ButtonShortcut';
import SpaceBetween from '@components/SpaceBetween';

const AccountCard = () => {
  return (
    <View style={styles.card}>
      <Row>
        <Avatar.Image
          size={48}
          source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}
          style={styles.avatar}
        />
        <View>
          <Title>Desa Pasir Ampo</Title>
          <Text>Kresek, Tangerang</Text>
        </View>
      </Row>
      <Separator style={{ marginVertical: 10 }} />
      <SpaceBetween>
        <View>
          <Text>NIK: 100000000</Text>
          <Text>Tgl. Lahir: 100000000</Text>
        </View>
        <Button mode='contained'>Perbarui</Button>
      </SpaceBetween>
    </View>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    paddingHorizontal: 10,
    width: DeviceContants.screenWidth - 50,
    paddingVertical: 10,
  },
  avatar: {
    marginRight: 10,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
});
