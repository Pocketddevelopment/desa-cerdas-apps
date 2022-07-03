import Separator from '@components/Separator';
import DocumentItem from '@service/components/DocumentItem';
import { requestStorageAndroid } from '@utils/permissions';
import React from 'react';
import RNFS from 'react-native-fs';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

const DocumentHistoryScreen: React.FC = () => {
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}>
      <DocumentItem
        format='xlsx'
        date='Senin, 11 Maret 2022 | 12:33'
        title='SKTM'
        onDownload={() => onPressItem('SKTM')}
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='xlsx'
        date='Senin, 11 Maret 2022 | 13:13'
        title='SKCK'
        onDownload={() => onPressItem('SKCK')}
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022 | 09:55'
        title='Surat Pengantar'
        onDownload={() => onPressItem('Surat Pengantar')}
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022 | 02:43'
        title='Surat Pengesahan Anggaran Usaha 2022'
        onDownload={() => onPressItem('Surat Pengesahan ANggaran Usaha 2022')}
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022 | 12:33'
        title='Akte Pendirian Usaha'
        onDownload={() => onPressItem('Akte Pendirian Usaha')}
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='xlsx'
        date='Senin, 11 Maret 2022 | 16:22'
        title='Surat Pengaktifan Pajak'
        onDownload={() => onPressItem('Surat Pengaktifan Pajak')}
      />
    </ScrollView>
  );
};

export default DocumentHistoryScreen;

// const styles = StyleSheet.create({});
