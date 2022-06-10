import Button from '@components/Button';
import Row from '@components/Row';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import DeviceContants from '@constants/device';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text, Title } from 'react-native-paper';
import { DashboardStackParamList } from '..';

const AccountCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPressUpdate = () => {
    navigation.navigate('UpdateAccount');
  };

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
        <Button style={styles.btnUpdate} onPress={onPressUpdate}>
          Perbarui
        </Button>
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
  btnUpdate: { flex: 1, marginLeft: 40 },
});
