import Failed from '@components/Failed';
import Row from '@components/Row';
import Separator from '@components/Separator';
import { Caption, Text, Title } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import CAQIIndexTable from '@dashboard/components/CAQIIndexTable';
import UVIndexTable from '@dashboard/components/UVIndexTable';
import { getAirPollutionThunk } from '@dashboard/models/thunks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useCallback, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';

const WeatherDetailScreen: React.FC = () => {
  const theme = useTheme();
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollBody}
      showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <SectionTitle>Cuaca Setempat</SectionTitle>
        {loading.weather ? (
          <ActivityIndicator />
        ) : weather ? (
          <>
            <Row>
              <View style={styles.weatherSummaryContainer}>
                <Image
                  source={{
                    uri: weather?.WeatherIcon,
                  }}
                  style={styles.image}
                />
                <Caption>{weather?.Hour}</Caption>
              </View>
              <View style={{ flex: 1, flexWrap: 'wrap' }}>
                <Row align='center'>
                  <Title size={24}>{weather.TempMax}°/ </Title>
                  <Title
                    size={14}
                    style={{ marginTop: 7 }}
                    color={theme.colors.caption}>
                    {weather?.TempMin}°C
                  </Title>
                </Row>
                <Text size={16}>{weather?.WeatherDescription}</Text>
                <Row>
                  <Image
                    source={{
                      uri: weather?.WindIcon,
                    }}
                    style={styles.weatherIcon}
                  />
                  <Text size={13}>Angin : {weather?.Wind}</Text>
                </Row>
                <Row style={{ flex: 1, flexWrap: 'wrap' }}>
                  <Row style={{ marginRight: 10 }}>
                    <Image
                      source={require('@assets/weather/humid.png')}
                      style={styles.weatherIcon}
                    />
                    <Text size={13}>Kelembaban : {weather?.Humidity}</Text>
                  </Row>
                  <Row>
                    <Image
                      source={{
                        uri: weather?.UviIndexColor,
                      }}
                      style={styles.weatherIcon}
                    />
                    <Text size={13}>Indeks UV : {weather?.UviIndex}</Text>
                  </Row>
                </Row>
              </View>
            </Row>
            <View style={styles.section}>
              <SectionTitle>Kualitas Udara</SectionTitle>
              <Row style={{ justifyContent: 'center' }}>
                <View style={styles.airQualityItemContainer}>
                  <Title size={36} color={weather?.NO2HexColor}>
                    {weather?.NO2}
                  </Title>
                  <Row>
                    <Text thickness='bold' size={12}>
                      NO
                    </Text>
                    <Text thickness='bold' size={8} style={{ marginTop: 8 }}>
                      2
                    </Text>
                  </Row>
                </View>
                <Separator vertical height={'60%'} width={1} />
                <View style={styles.airQualityItemContainer}>
                  <Title size={36} color={weather?.O3HexColor}>
                    {weather?.O3}
                  </Title>
                  <Row>
                    <Text thickness='bold' size={12}>
                      O
                    </Text>
                    <Text thickness='bold' size={8} style={{ marginTop: 8 }}>
                      3
                    </Text>
                  </Row>
                </View>
                <Separator vertical height={'60%'} width={1} />
                <View style={styles.airQualityItemContainer}>
                  <Title size={36} color={weather?.PM10HexColor}>
                    {weather?.PM10}
                  </Title>
                  <Row>
                    <Text thickness='bold' size={12}>
                      PM
                    </Text>
                    <Text thickness='bold' size={8} style={{ marginTop: 8 }}>
                      10
                    </Text>
                  </Row>
                </View>
                <Separator vertical height={'60%'} width={1} />
                <View style={styles.airQualityItemContainer}>
                  <Title size={36} color={weather?.PM25HexColor}>
                    {weather?.PM25}
                  </Title>
                  <Row>
                    <Text thickness='bold' size={12}>
                      PM
                    </Text>
                    <Text thickness='bold' size={8} style={{ marginTop: 8 }}>
                      2.5
                    </Text>
                  </Row>
                </View>
              </Row>
            </View>
          </>
        ) : (
          <Failed onBtnPress={() => getAirPollution()} />
        )}
      </View>
      <CAQIIndexTable />
      <UVIndexTable />
    </ScrollView>
  );
};

export default WeatherDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollBody: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  section: {
    paddingVertical: 10,
  },
  weatherSummaryContainer: {
    marginRight: 10,
  },
  image: {
    height: 90,
    width: 100,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  weatherIcon: {
    resizeMode: 'cover',
    width: 12,
    height: 12,
    marginRight: 5,
  },
  airQualityItemContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
