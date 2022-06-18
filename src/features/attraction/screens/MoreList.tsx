import AttractionItem from '@attraction/components/AttractionItem';
import Separator from '@components/Separator';
import { DashboardStackParamList } from '@dashboard/index';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

type MoreListProps = {
  navigation: NativeStackNavigationProp<DashboardStackParamList, any>;
  route: RouteProp<any>;
};

const MoreListScreen: React.FC<MoreListProps> = ({ navigation, route }) => {
  const target = route.params?.target;

  useEffect(() => {
    navigation.setOptions({
      title: target === 'attraction' ? 'Destinasi Lokal' : 'Industri Kreatif',
    });
  }, [navigation, target]);

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

export default MoreListScreen;

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
