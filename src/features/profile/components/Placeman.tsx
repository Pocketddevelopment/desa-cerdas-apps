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
        thumbnailUri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9F59uOTpkeTJpE-nzq-Cm-U-O7TmiP_Gf4A&usqp=CAU'
        name='Mastur'
        position='Wakil Kepala Desa'
        phone='08913131931'
        idNumber='141/Kep.1124-Huk/201'
      />
      <PlacemanCard
        thumbnailUri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQ5EXJpIZhLKIkfixdYpl-U8GbtgHzlGVLA&usqp=CAU'
        name='BUDI'
        position='Bendahara'
        phone='08913131931'
        idNumber='141/Kep.1124-Huk/201'
      />
      <PlacemanCard
        thumbnailUri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8eVUVcDv0d721VpLhrqDGZ__O2h4_i_TLw&usqp=CAU'
        name='Arban'
        position='Humas'
        phone='08913131931'
        idNumber='141/Kep.1124-Huk/201'
      />
    </ScrollView>
  );
};

export default Placeman;
