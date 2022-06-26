import Separator from '@components/Separator';
import DocumentItem from '@service/components/DocumentItem';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import RNFS from 'react-native-fs';

const DocumentHistoryScreen: React.FC = () => {
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
        title='Surat Pengesahan ANggaran Usaha 2022'
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
      <Toast position='bottom' bottomOffset={20} />
    </ScrollView>
  );
};

export default DocumentHistoryScreen;

// const styles = StyleSheet.create({});
