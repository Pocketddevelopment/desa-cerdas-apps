import Separator from '@components/Separator';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { requestStorageAndroid } from '@utils/permissions';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import RNFS from 'react-native-fs';
import Toast from 'react-native-toast-message';
import ReportItem from '../components/ReportItem';

const ReportListScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPressItem = async (title: string) => {
    const isGranted = await requestStorageAndroid();
    if (isGranted) {
      RNFS.downloadFile({
        fromUrl:
          'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        toFile: `${RNFS.DownloadDirectoryPath}/${title}.pdf`,
      })
        .promise.then((r) => {
          Toast.show({
            type: 'standard',
            text1: `Berhasil mengunduh ${title}`,
          });
        })
        .catch((err) => {
          Toast.show({
            type: 'standard',
            text1: `Gagal mengunduh ${title}`,
          });
        });
    } else {
      Toast.show({
        type: 'standard',
        text1: 'Tidak ada izin akses penyimpanan',
      });
    }
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
