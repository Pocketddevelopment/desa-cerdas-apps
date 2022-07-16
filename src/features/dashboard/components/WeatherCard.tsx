import Failed from '@components/Failed';
import Row from '@components/Row';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import { Caption, Text, Title } from '@components/typography';
import DeviceContants from '@constants/device';
import { getAirPollutionThunk } from '@dashboard/models/thunks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import { DashboardStackParamList } from '..';

const WeatherCard = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const dispatch = useAppDispatch();
  const { loading, weather } = useAppSelector((state: RootState) => state.misc);

  const getAirPollution = useCallback(() => {
    dispatch(getAirPollutionThunk());
  }, []);

  useEffect(() => {
    if (!weather) {
      getAirPollution();
    }
  }, []);

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
      {loading.weather ? (
        <ActivityIndicator />
      ) : weather ? (
        <>
          <Row>
            <View>
              <Image
                source={{
                  uri: weather.WeatherIcon,
                }}
                style={styles.image}
              />
              <Caption>{weather.Hour}</Caption>
            </View>
            <View style={{ flex: 1, flexWrap: 'wrap' }}>
              <Row align='center'>
                <Title size={24}>{weather.TempMax}°/ </Title>
                <Title
                  size={14}
                  style={{ marginTop: 7 }}
                  color={theme.colors.caption}>
                  {weather.TempMin}°C
                </Title>
              </Row>
              <Text size={16} style={{ marginTop: -5 }}>
                {weather.WeatherDescription}
              </Text>
              <Row>
                <Row align='top' style={{ flex: 1, flexWrap: 'wrap' }}>
                  <Row align='center'>
                    <Image
                      source={{ uri: weather.WindIcon }}
                      style={styles.weatherIcon}
                    />
                    <Text size={13}>Angin : </Text>
                  </Row>
                  <View style={{ flex: 1 }}>
                    <Text size={13}>{weather.Wind}</Text>
                  </View>
                </Row>
              </Row>
              <Row align='top' style={{ flex: 1, flexWrap: 'wrap' }}>
                <Row style={{ marginRight: 10 }}>
                  <Image
                    source={require('@assets/weather/humid.png')}
                    style={styles.weatherIcon}
                  />
                  <Text size={13}>Kelembaban Udara: {weather.Humidity}</Text>
                </Row>
                <Row>
                  <Image
                    source={require('@assets/weather/uv.png')}
                    style={styles.weatherIcon}
                  />
                  <Text size={13}>
                    Indeks UV :{' '}
                    <Text color={weather.UviIndexColor} size={13}>
                      {weather.UviIndex}
                    </Text>
                  </Text>
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
              <Title
                color={weather.PM25HexColor}
                size={24}
                style={{ marginRight: 10 }}>
                {weather.PMDesc}
              </Title>
              <Text> </Text>
              <Title color={weather.PM25HexColor} size={18}>
                {weather.PM25HexColor}
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
        </>
      ) : (
        <Failed onBtnPress={() => getAirPollution()} />
      )}
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
  },
});
