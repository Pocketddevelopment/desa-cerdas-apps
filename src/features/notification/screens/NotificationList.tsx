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
        description='Lorem ipsum dolor sit amet, consetetur sadipscing…Lorem ipsum dolor sit amet, consetetur sadipscing…'
        title='Ada balasan atas keluhan Anda'
        read={false}
      />
      <Separator />
      <NotificationItem
        date='Selasa, 12 Maret 2022'
        description='Lorem ipsum dolor sit amet, consetetur sadipscing…Lorem ipsum dolor sit amet, consetetur sadipscing…'
        title='Ada balasan atas keluhan Anda'
        read={false}
      />
      <Separator />
      <NotificationItem
        date='Selasa, 12 Maret 2022'
        description='Lorem ipsum dolor sit amet, consetetur sadipscing…Lorem ipsum dolor sit amet, consetetur sadipscing…'
        title='Ada balasan atas keluhan Anda'
      />
      <Separator />
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
