import AttractionItem from '@attraction/components/AttractionItem';
import Separator from '@components/Separator';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const AttractionListScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPressItem = () => {
    navigation.navigate('AttractionDetail');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
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
    </ScrollView>
  );
};

export default AttractionListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingVertical: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});
