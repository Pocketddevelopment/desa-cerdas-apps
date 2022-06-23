import React from 'react';
import Row from '@components/Row';
import { Image, StyleSheet, View } from 'react-native';
import DeviceContants from '@constants/device';
import Separator from '@components/Separator';
import ButtonShortcut from './ButtonShortcut';
import { DashboardStackParamList } from '..';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Caption, Text, Title } from '@components/typography';

const DistrictCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  function onPressShortcut(target: keyof DashboardStackParamList) {
    navigation.navigate(target);
  }

  return (
    <View style={styles.card}>
      <Caption style={styles.captionTitle} size={12}>
        Kependudukan
      </Caption>
      <Row>
        <Image
          source={{
            uri: 'http://13.250.44.36:8001/assets/images/logo-desa.png',
          }}
          style={styles.image}
        />
        <View>
          <Title size={17}>Desa Pasir Ampo</Title>
          <Text>Kresek, Tangerang</Text>
        </View>
      </Row>
      <Separator style={{ marginVertical: 10 }} />
      <View style={styles.shortcutContainer}>
        <ButtonShortcut
          icon={require('@assets/district-card/profile.webp')}
          title={'Profil'}
          onPress={() => onPressShortcut('Profile')}
        />
        <ButtonShortcut
          icon={require('@assets/district-card/attraction.webp')}
          title={'Wisata'}
          onPress={() => onPressShortcut('Attraction')}
        />
        <ButtonShortcut
          icon={require('@assets/district-card/sme.webp')}
          title={'UMKM'}
          onPress={() => onPressShortcut('SME')}
        />
        <ButtonShortcut
          icon={require('@assets/district-card/report.webp')}
          title={'Laporan'}
          onPress={() => onPressShortcut('Report')}
        />
        <ButtonShortcut
          icon={require('@assets/district-card/service.webp')}
          title={'Layanan'}
          onPress={() => onPressShortcut('Service')}
        />
      </View>
    </View>
  );
};

export default DistrictCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    borderRadius: 15,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    paddingHorizontal: 15,
    width: DeviceContants.screenWidth - 50,
    position: 'absolute',
    paddingVertical: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  captionTitle: {
    marginBottom: 10,
  },
  shortcutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 2,
  },
});
