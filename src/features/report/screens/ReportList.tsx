import Separator from '@components/Separator';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView } from 'react-native';
import ReportItem from '../components/ReportItem';

const ReportListScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  return (
    <ScrollView>
      <ReportItem
        date='Selasa, 12 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2022'
      />
      <Separator width={'85%'} />
      <ReportItem
        date='Selasa, 12 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2022'
      />
      <Separator width={'85%'} />
      <ReportItem
        date='Selasa, 12 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2022'
      />
      <Separator width={'85%'} />
    </ScrollView>
  );
};

export default ReportListScreen;
