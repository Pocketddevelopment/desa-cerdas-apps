import Separator from '@components/Separator';
import NewsItem from '@dashboard/components/NewsItem';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption } from 'react-native-paper';
import ReportItem from '../../report/components/ReportItem';

const DistrictHighlight = () => {
  return (
    <View style={styles.card}>
      <View style={styles.section}>
        <Caption style={{ lineHeight: undefined }}>Event Kegiatan</Caption>
        <NewsItem />
        <Separator color='lightgrey' />
        <NewsItem />
        <Separator color='lightgrey' />
        <NewsItem />
      </View>
      <View style={styles.section}>
        <Caption style={{ lineHeight: undefined }}>
          Laporan Perkembangan
        </Caption>
        <ReportItem
          format='xlsx'
          date='Senin, 11 Maret 2022'
          title='Pengembangan sentra usaha tahu bulan Februari'
        />
        <Separator color='lightgrey' />
        <ReportItem
          format='xlsx'
          date='Senin, 11 Maret 2022'
          title='Pengembangan sentra usaha tahu bulan Februari'
        />
        <Separator color='lightgrey' />
        <ReportItem
          format='pdf'
          date='Senin, 11 Maret 2022'
          title='Pengembangan sentra usaha tahu bulan Februari'
        />
      </View>
    </View>
  );
};

export default DistrictHighlight;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  section: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
