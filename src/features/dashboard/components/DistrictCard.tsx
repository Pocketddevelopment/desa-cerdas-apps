import React from 'react';
import Row from '@components/Row';
import { Image, StyleSheet, View } from 'react-native';
import { Caption, Text, Title } from 'react-native-paper';
import DeviceContants from '@constants/device';
import Separator from '@components/Separator';
import ButtonShortcut from './ButtonShortcut';

const DistrictCard = () => {
  return (
    <View style={styles.card}>
      <Caption>Kependudukan</Caption>
      <Row>
        <Image
          source={{
            uri: 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
          }}
          style={styles.image}
        />
        <View>
          <Title>Desa Pasir Ampo</Title>
          <Text>Kresek, Tangerang</Text>
        </View>
      </Row>
      <Separator style={{ marginVertical: 10 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <ButtonShortcut
          uri={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
          }
          title={'Profil'}
        />
        <ButtonShortcut
          uri={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
          }
          title={'Wisata'}
        />
        <ButtonShortcut
          uri={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
          }
          title={'UMKM'}
        />
        <ButtonShortcut
          uri={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
          }
          title={'Laporan'}
        />
        <ButtonShortcut
          uri={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
          }
          title={'Layanan'}
        />
      </View>
    </View>
  );
};

export default DistrictCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    paddingHorizontal: 10,
    width: DeviceContants.screenWidth - 50,
    position: 'absolute',
    paddingVertical: 10,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
});