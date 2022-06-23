import Separator from '@components/Separator';
import DocumentItem from '@service/components/DocumentItem';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DocumentHistoryScreen: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <DocumentItem format='xlsx' date='Senin, 11 Maret 2022' title='SKTM' />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem format='xlsx' date='Senin, 11 Maret 2022' title='SKCK' />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Surat Pengantar'
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Surat Pengesahan ANggaran Usaha 2022'
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Akte Pendirian Usaha'
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='xlsx'
        date='Senin, 11 Maret 2022'
        title='Surat Pengaktifan Pajak'
      />
    </ScrollView>
  );
};

export default DocumentHistoryScreen;

// const styles = StyleSheet.create({});
