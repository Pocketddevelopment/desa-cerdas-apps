import React from 'react';
import { ScrollView } from 'react-native';
import PlacemanCard from './PlacemanCard';

const Placeman = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 10,
      }}>
      <PlacemanCard
        thumbnailUri='https://cileunyikulon.desa.id/desa/upload/artikel/sedang_1585227300_sedang_1581955311_Foto%20Pak%20Kades%20(2).jpg'
        name='SUardi'
        position='Kepala Desa'
        phone='08123456789'
        idNumber='141/Kep.1124-Huk/201'
      />
      <PlacemanCard
        thumbnailUri='https://cileunyikulon.desa.id/desa/upload/artikel/sedang_1585227300_sedang_1581955311_Foto%20Pak%20Kades%20(2).jpg'
        name='SUardi'
        position='Kepala Desa'
        phone='08123456789'
        idNumber='141/Kep.1124-Huk/201'
      />
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

export default Placeman;
