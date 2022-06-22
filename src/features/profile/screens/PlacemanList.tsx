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
      uri: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Peta_Desa_Langkura.jpg',
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
        thumbnailUri='https://cileunyikulon.desa.id/desa/upload/artikel/sedang_1585227300_sedang_1581955311_Foto%20Pak%20Kades%20(2).jpg'
        name='SUardi'
        position='Kepala Desa'
        phone='08123456789'
        idNumber='141/Kep.1124-Huk/201'
      />
      <Separator width={'85%'} />
      <PlacemanCard
        thumbnailUri='https://cileunyikulon.desa.id/desa/upload/artikel/sedang_1585227300_sedang_1581955311_Foto%20Pak%20Kades%20(2).jpg'
        name='SUardi'
        position='Kepala Desa'
        phone='08123456789'
        idNumber='141/Kep.1124-Huk/201'
      />
      <Separator width={'85%'} />
      <PlacemanCard
        thumbnailUri='https://cileunyikulon.desa.id/desa/upload/artikel/sedang_1585227300_sedang_1581955311_Foto%20Pak%20Kades%20(2).jpg'
        name='SUardi'
        position='Kepala Desa'
        phone='08123456789'
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
