import Separator from '@components/Separator';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ReportItem from '../components/ReportItem';

const ReportListScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ReportItem
        format='xlsx'
        date='Senin, 12 Maret 2022'
        title='Pengembangan sentra usaha tahu bulan Februari'
      />
      <Separator width={'95%'} />
      <ReportItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Rencana pembangunan sentra usaha tahu bulan Februari'
      />
      <Separator width={'95%'} />
      <ReportItem
        format='xlsx'
        date='Senin, 10 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2021'
      />
      <Separator width={'95%'} />
      <ReportItem
        format='xlsx'
        date='Senin, 9 Maret 2022'
        title='Pengembangan sentra usaha tahu bulan Februari'
      />
      <Separator width={'95%'} />
      <ReportItem
        format='pdf'
        date='Senin, 8 Maret 2022'
        title='Rencana pembangunan sentra usaha tahu bulan Februari'
      />
      <Separator width={'95%'} />
      <ReportItem
        format='xlsx'
        date='Senin, 7 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2021'
      />
      <Separator width={'95%'} />
    </ScrollView>
  );
};

export default ReportListScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
