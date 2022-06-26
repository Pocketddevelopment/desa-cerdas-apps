import Row from '@components/Row';
import Separator from '@components/Separator';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Caption, Text, Title } from 'react-native-paper';
import NotificationItem from '../components/NotificationItem';

const NotificationListScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  return (
    <ScrollView>
      <NotificationItem
        date='Selasa, 12 Maret 2022'
        description='Dear Bupati, Jalan Rusak dan Berlubang Masih Banyak Bertebaran di Sidoarjo'
        title='Ada balasan atas keluhan Anda'
        read={false}
      />
      <Separator width={'85%'} />
      <NotificationItem
        date='Selasa, 12 Maret 2022'
        description='Sampah-sampah ini kiriman dari desa di atasnya'
        title='Ada balasan atas keluhan Anda'
        read={false}
      />
      <Separator width={'85%'} />
      <NotificationItem
        date='Selasa, 12 Maret 2022'
        description='“Menuju sore jalan ini suka ramai di lintasi apalagi sekarang bulan ramadhan banyak yang ngabuburit ke arah kota, kalau bisa cepat di bereskan agar kami warga tidak kesusahan mepet terus ke pinggir jalan apalagi kalau bawa anak susah'
        title='Ada balasan atas keluhan Anda'
      />
      <Separator width={'85%'} />
    </ScrollView>
  );
};

export default NotificationListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 10,
  },
});
