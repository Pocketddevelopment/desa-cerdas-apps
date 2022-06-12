import Separator from '@components/Separator';
import DocumentItem from '@service/components/DocumentItem';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DocumentHistoryScreen: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <DocumentItem
        format='xlsx'
        date='Senin, 11 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2022'
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='xlsx'
        date='Senin, 11 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2022'
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2022'
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2022'
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2022'
      />
      <Separator width={'85%'} color={'lightgrey'} />
      <DocumentItem
        format='xlsx'
        date='Senin, 11 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2022'
      />
    </ScrollView>
  );
};

export default DocumentHistoryScreen;

// const styles = StyleSheet.create({});
