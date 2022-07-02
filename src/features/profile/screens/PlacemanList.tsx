import Button from '@components/Button';
import Separator from '@components/Separator';
import { DashboardStackParamList } from '@dashboard/index';
import PlacemanCard from '@profile/components/PlacemanCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const PlacemanListScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const openChart = () => {
    navigation.navigate('ImagePreview', {
      uri: 'http://13.250.44.36:8001/assets/images/struktur-oraganisas.png',
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Button
        mode='outlined'
        primary
        btnStyle={styles.btnMaps}
        onPress={openChart}>
        Bagan Pemerintahan
      </Button>
      <PlacemanCard
        thumbnailUri='http://13.250.44.36:8001/assets/images/foto-lurah.png'
        name='ASEP'
        position='Kepala Desa'
        phone='08123456789'
        idNumber='141/Kep.1124-Huk/201'
      />
      <PlacemanCard
        thumbnailUri='http://13.250.44.36:8002/pejabat/4.jpg'
        name='Mastur'
        position='Wakil Kepala Desa'
        phone='08913131931'
        idNumber='141/Kep.1124-Huk/201'
      />
      <PlacemanCard
        thumbnailUri='http://13.250.44.36:8002/pejabat/3.jpg'
        name='BUDI'
        position='Bendahara'
        phone='08913131931'
        idNumber='141/Kep.1124-Huk/201'
      />
      <PlacemanCard
        thumbnailUri='http://13.250.44.36:8002/pejabat/2.jpg'
        name='Arban'
        position='Humas'
        phone='08913131931'
        idNumber='141/Kep.1124-Huk/201'
      />
    </ScrollView>
  );
};

export default PlacemanListScreen;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 15,
  },
  btnMaps: {
    margin: 5,
    width: 'auto',
  },
});
