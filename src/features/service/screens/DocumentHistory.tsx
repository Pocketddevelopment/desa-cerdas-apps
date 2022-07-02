import Separator from '@components/Separator';
import DocumentItem from '@service/components/DocumentItem';
import { requestAndroidOnly } from '@utils/permissions';
import React from 'react';
import RNFS from 'react-native-fs';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

const DocumentHistoryScreen: React.FC = () => {
  const onPressItem = async (title: string) => {
    const isGranted = await requestAndroidOnly(
      'android.permission.WRITE_EXTERNAL_STORAGE'
    );
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
          console.log(err);
          Toast.show({
            type: 'standard',
            text1: `Gagal mengunduh ${title}`,
          });
        });
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}>
      <DocumentItem
        format='xlsx'
        date='Senin, 11 Maret 2022'
        title='SKTM'
        onDownload={() => onPressItem('SKTM')}
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='xlsx'
        date='Senin, 11 Maret 2022'
        title='SKCK'
        onDownload={() => onPressItem('SKCK')}
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Surat Pengantar'
        onDownload={() => onPressItem('Surat Pengantar')}
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Surat Pengesahan Anggaran Usaha 2022'
        onDownload={() => onPressItem('Surat Pengesahan ANggaran Usaha 2022')}
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Akte Pendirian Usaha'
        onDownload={() => onPressItem('Akte Pendirian Usaha')}
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='xlsx'
        date='Senin, 11 Maret 2022'
        title='Surat Pengaktifan Pajak'
        onDownload={() => onPressItem('Surat Pengaktifan Pajak')}
      />
    </ScrollView>
  );
};

export default DocumentHistoryScreen;

// const styles = StyleSheet.create({});
