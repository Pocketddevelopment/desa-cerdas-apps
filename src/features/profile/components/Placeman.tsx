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

export default Placeman;
