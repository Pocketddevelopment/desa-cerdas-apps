import AttractionItem from '@attraction/components/AttractionItem';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import { Text } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const AttractionScreen: React.FC = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPressItem = () => {
    navigation.navigate('AttractionDetail');
  };

  const onPressMore = (target: string) => {
    navigation.navigate('MoreList', {
      target: target,
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <SpaceBetween>
          <SectionTitle>Destinasi Lokal</SectionTitle>
          <Text
            color={theme.colors.primary}
            onPress={() => onPressMore('attraction')}>
            Lihat selengkapnya
          </Text>
        </SpaceBetween>
        <AttractionItem
          thumbnailUri='https://akcdn.detik.net.id/visual/2020/12/16/air-terjun-banyumala_169.jpeg?w=650'
          title='Curug Plered'
          description='Tempat wisata alam yang tidak kalah dari tempat di pulau lainnya,
              yaitu wisata air terjun'
          onPress={() => onPressItem()}
        />
        <Separator width={'85%'} color={'lightgrey'} />
        <AttractionItem
          thumbnailUri='https://akcdn.detik.net.id/visual/2020/12/16/air-terjun-banyumala_169.jpeg?w=650'
          title='Curug Plered'
          description='Tempat wisata alam yang tidak kalah dari tempat di pulau lainnya,
              yaitu wisata air terjun'
          onPress={onPressItem}
        />
        <Separator width={'85%'} color={'lightgrey'} />
        <AttractionItem
          thumbnailUri='https://akcdn.detik.net.id/visual/2020/12/16/air-terjun-banyumala_169.jpeg?w=650'
          title='Curug Plered'
          description='Tempat wisata alam yang tidak kalah dari tempat di pulau lainnya,
              yaitu wisata air terjun'
          onPress={onPressItem}
        />
      </View>
      <View style={styles.section}>
        <SpaceBetween>
          <Text style={styles.sectionTitle}>Industri Kreatif</Text>
          <Text
            color={theme.colors.primary}
            onPress={() => onPressMore('industry')}>
            Lihat selengkapnya
          </Text>
        </SpaceBetween>
        <AttractionItem
          thumbnailUri='https://s1.bukalapak.com/bukalapak-kontenz-production/content_attachments/75106/original/motif_batik_pekalongan_dan_makna_main.jpg'
          title='Batik Pekalongan'
          description='Pekalongan dikenal dengan kota batik. Bahkan, pengrajin kain batik kota ini menghasilkan'
          onPress={() => onPressItem()}
        />
        <Separator width={'85%'} color={'lightgrey'} />
        <AttractionItem
          thumbnailUri='https://s1.bukalapak.com/bukalapak-kontenz-production/content_attachments/75106/original/motif_batik_pekalongan_dan_makna_main.jpg'
          title='Batik Pekalongan'
          description='Pekalongan dikenal dengan kota batik. Bahkan, pengrajin kain batik kota ini menghasilkan'
          onPress={() => onPressItem()}
        />
        <Separator width={'85%'} color={'lightgrey'} />
        <AttractionItem
          thumbnailUri='https://s1.bukalapak.com/bukalapak-kontenz-production/content_attachments/75106/original/motif_batik_pekalongan_dan_makna_main.jpg'
          title='Batik Pekalongan'
          description='Pekalongan dikenal dengan kota batik. Bahkan, pengrajin kain batik kota ini menghasilkan'
          onPress={() => onPressItem()}
        />
      </View>
    </ScrollView>
  );
};

export default AttractionScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});
