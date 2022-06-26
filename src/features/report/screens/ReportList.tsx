import Separator from '@components/Separator';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ReportItem from '../components/ReportItem';
import Toast from 'react-native-toast-message';
import RNFS from 'react-native-fs';

const ReportListScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPressItem = (title: string) => {
    RNFS.downloadFile({
      fromUrl: 'https://facebook.github.io/react-native/img/header_logo.png',
      toFile: `${RNFS.DocumentDirectoryPath}/react-native.png`,
    })
      .promise.then((r) => {
        Toast.show({
          text1: `Berhasil mengunduh ${title}`,
        });
      })
      .catch(() => {
        Toast.show({
          text1: `Berhasil mengunduh ${title}`,
        });
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ReportItem
        format='xlsx'
        date='Senin, 12 Maret 2022'
        title='Pengembangan sentra usaha tahu bulan Februari'
        onDownload={() =>
          onPressItem('Pengembangan sentra usaha tahu bulan Februari')
        }
      />
      <Separator width={'95%'} />
      <ReportItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Rencana pembangunan sentra usaha tahu bulan Februari'
        onDownload={() =>
          onPressItem('Rencana pembangunan sentra usaha tahu bulan Februari')
        }
      />
      <Separator width={'95%'} />
      <ReportItem
        format='xlsx'
        date='Senin, 10 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2021'
        onDownload={() => onPressItem('Anggaran Pendapatan Belanja Desa 2021')}
      />
      <Separator width={'95%'} />
      <ReportItem
        format='xlsx'
        date='Senin, 9 Maret 2022'
        title='Pengembangan sentra usaha tahu bulan Februari'
        onDownload={() =>
          onPressItem('Pengembangan sentra usaha tahu bulan Februari')
        }
      />
      <Separator width={'95%'} />
      <ReportItem
        format='pdf'
        date='Senin, 8 Maret 2022'
        title='Rencana pembangunan sentra usaha tahu bulan Februari'
        onDownload={() =>
          onPressItem('Rencana pembangunan sentra usaha tahu bulan Februari')
        }
      />
      <Separator width={'95%'} />
      <ReportItem
        format='xlsx'
        date='Senin, 7 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2021'
        onDownload={() => onPressItem('Anggaran Pendapatan Belanja Desa 2021')}
      />
      <Toast position='bottom' bottomOffset={20} />
    </ScrollView>
  );
};

export default ReportListScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});
