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
import SpaceBetween from '@components/SpaceBetween';
import { useTheme } from 'react-native-paper';

const WeatherCard = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  return (
    <View style={styles.card}>
      <SpaceBetween>
        <Caption style={styles.captionTitle} size={12}>
          Cuaca Setempat
        </Caption>
        <Text
          size={12}
          color={theme.colors.primary}
          onPress={() => navigation.navigate('WeatherDetail')}>
          Lihat selengkapnya
        </Text>
      </SpaceBetween>
      <Row>
        <View>
          <Image
            source={{
              uri: 'http://openweathermap.org/img/wn/10d@2x.png',
            }}
            style={styles.image}
          />
          <Caption>13:00 WIB</Caption>
        </View>
        <View style={{ flex: 1, flexWrap: 'wrap' }}>
          <Row align='center'>
            <Title size={24}>29°/ </Title>
            <Title
              size={14}
              style={{ marginTop: 7 }}
              color={theme.colors.caption}>
              22°C
            </Title>
          </Row>
          <Text size={16} style={{ marginTop: -5 }}>
            Hujan Sedang
          </Text>
          <Row align='top' style={{ flex: 1, flexWrap: 'wrap' }}>
            <Row align='center'>
              <Image
                source={require('@assets/weather/wind.png')}
                style={styles.weatherIcon}
              />
              <Text size={13}>Angin : </Text>
            </Row>
            <View style={{ flex: 1 }}>
              <Text size={13}>4,8m/detik - Utara</Text>
            </View>
          </Row>
          <Row style={{ flex: 1, flexWrap: 'wrap' }}>
            <Row style={{ marginRight: 10 }}>
              <Image
                source={require('@assets/weather/humid.png')}
                style={styles.weatherIcon}
              />
              <Text size={13}>Kelembaban Udara: 35%</Text>
            </Row>
            <Row>
              <Image
                source={require('@assets/weather/uv.png')}
                style={styles.weatherIcon}
              />
              <Text size={13}>Indeks UV : 8</Text>
            </Row>
          </Row>
        </View>
      </Row>
      <Separator style={{ marginVertical: 5 }} height={2} />
      <Caption style={[styles.captionTitle, { marginBottom: 5 }]} size={12}>
        Kualitas Udara
      </Caption>
      <Row align='center'>
        <Row style={{ flex: 3, marginRight: 40 }}>
          <Title color={'#F9C828'} size={24} style={{ marginRight: 10 }}>
            31
          </Title>
          <Text> </Text>
          <Title color={'#F9C828'} size={18}>
            Sedang
          </Title>
        </Row>
        <Row style={{ flex: 4 }}>
          <Text size={12}>
            Berdasarkan Skala Indeks{' '}
            <Row align='bottom'>
              <Text thickness='bold' size={12}>
                PM
              </Text>
              <Text thickness='bold' size={8} style={{ lineHeight: 8 }}>
                2.5
              </Text>
              <Text thickness='bold' size={12}>
                {' '}
                CAQI
              </Text>
            </Row>
          </Text>
        </Row>
        <View style={{ flex: 2.5 }} />
      </Row>
    </View>
  );
};

export default WeatherCard;

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
    paddingVertical: 10,
    alignSelf: 'center',
  },
  image: {
    height: 90,
    width: 100,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  captionTitle: {
    marginBottom: 10,
  },
  shortcutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 2,
  },
  weatherIcon: {
    resizeMode: 'cover',
    width: 12,
    height: 12,
    marginRight: 5,
    transform: [
      {
        rotate: '90deg',
      },
    ],
  },
});
