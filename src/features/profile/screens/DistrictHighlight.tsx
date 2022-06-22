import Button from '@components/Button';
import Row from '@components/Row';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import { Text } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import NewsItem from '@dashboard/components/NewsItem';
import { DashboardStackParamList } from '@dashboard/index';
import PlacemanCard from '@profile/components/PlacemanCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import ReportItem from '../../report/components/ReportItem';

const DistrictHighlightScreen: React.FC = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <SpaceBetween>
        <SectionTitle>Event Kegiatan</SectionTitle>
        <Text
          color={theme.colors.primary}
          onPress={() => navigation.navigate('EventList')}>
          Lihat selengkapnya
        </Text>
      </SpaceBetween>
      <NewsItem />
      <Separator width={'85%'} />
      <NewsItem />
      <Separator width={'85%'} />
      <NewsItem />
      <Separator width={'85%'} />
      <NewsItem />
      <Separator width={'85%'} />
      <NewsItem />
      <Row style={{ marginTop: 10 }}>
        <SectionTitle>Laporan Perkembangan</SectionTitle>
      </Row>
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
    </ScrollView>
  );
};

export default DistrictHighlightScreen;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 15,
  },
  btnMaps: {
    margin: 5,
    width: 'auto',
  },
});
