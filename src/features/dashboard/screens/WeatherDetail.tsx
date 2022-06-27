import Row from '@components/Row';
import Separator from '@components/Separator';
import { Caption, Text, Title } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import CAQIIndexTable from '@dashboard/components/CAQIIndexTable';
import UVIndexTable from '@dashboard/components/UVIndexTable';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { DashboardStackParamList } from '..';

const WeatherDetailScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const theme = useTheme();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollBody}
      showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <SectionTitle>Cuaca Setempat</SectionTitle>
        <Row>
          <View style={styles.weatherSummaryContainer}>
            <Image
              source={{
                uri: 'http://openweathermap.org/img/wn/10d@2x.png',
              }}
              style={styles.image}
            />
            <Caption>13:00 WIB</Caption>
          </View>
          <View>
            <Row align='center'>
              <Title size={24}>29°/ </Title>
              <Title
                size={14}
                style={{ marginTop: 7 }}
                color={theme.colors.caption}>
                22°C
              </Title>
            </Row>
            <Text size={16}>Hujan Sedang</Text>
            <Row>
              <Image
                source={require('@assets/weather/wind.png')}
                style={styles.weatherIcon}
              />
              <Text size={13}>Angin : 4,8m/detik - Utara</Text>
            </Row>
            <Row>
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
          </View>
        </Row>
      </View>
      <View style={styles.section}>
        <SectionTitle>Kualitas Udara</SectionTitle>
        <Row style={{ justifyContent: 'center' }}>
          <View style={styles.airQualityItemContainer}>
            <Title size={36} color={'#53E060'}>
              55
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
            <Title size={36} color={'#00850C'}>
              42
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
            <Title size={36} color={'#F9C828'}>
              69
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
            <Title size={36} color={'#F9C828'}>
              31
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
