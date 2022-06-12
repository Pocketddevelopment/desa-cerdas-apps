import Row from '@components/Row';
import SpaceBetween from '@components/SpaceBetween';
import DeviceContants from '@constants/device';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { Caption, Text } from 'react-native-paper';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [100, 45, 28, 80, 99, 43],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#FFFFFF',
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const pieData = [
  {
    population: 21500000,
    color: 'rgba(131, 167, 234, 1)',
  },
  {
    population: 2800000,
    color: '#F00',
  },
  {
    population: 527612,
    color: 'red',
  },
  {
    population: 8538000,
    color: '#ffffff',
  },
  {
    population: 11920000,
    color: 'rgb(0, 0, 255)',
  },
];

const Population = () => {
  return (
    <View style={styles.card}>
      <Text>
        <Text style={styles.bold}>5891</Text> orang
      </Text>
      <Text>
        dalam <Text style={styles.bold}>1940</Text> keluarga
      </Text>
      <Row style={styles.section}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.bold, styles.man]}>3086</Text>
          <View style={styles.manSign}>
            <Text style={{ color: 'white' }}>Pria</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.bold, styles.woman]}>3086</Text>
          <View style={styles.womanSign}>
            <Text style={styles.woman}>Wanita</Text>
          </View>
        </View>
      </Row>

      <BarChart
        data={data}
        chartConfig={chartConfig}
        height={200}
        width={DeviceContants.screenWidth - 50}
        yAxisLabel={''}
        yAxisSuffix={''}
      />

      <View style={styles.section}>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.man, styles.right]}>24.39%</Text>
            <Text style={[styles.flex, styles.right]}>149</Text>
          </Row>
          <Caption
            style={{ marginHorizontal: 10, flex: 1, textAlign: 'center' }}>
            Belum Kawin
          </Caption>
          <Row style={{ flex: 1 }}>
            <Text style={styles.flex}>149</Text>
            <Text style={[styles.flex, styles.woman, styles.left]}>24.39%</Text>
          </Row>
        </Row>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.man, styles.right]}>4.39%</Text>
            <Text style={[styles.flex, styles.right]}>1459</Text>
          </Row>
          <Caption
            style={{ marginHorizontal: 10, flex: 1, textAlign: 'center' }}>
            Kawin
          </Caption>
          <Row style={{ flex: 1 }}>
            <Text style={styles.flex}>19</Text>
            <Text style={[styles.flex, styles.woman, styles.left]}>4.39%</Text>
          </Row>
        </Row>
      </View>

      <PieChart
        data={pieData}
        width={DeviceContants.screenWidth - 50}
        height={220}
        hasLegend={false}
        center={[DeviceContants.screenWidth / 2 - 110, 0]}
        chartConfig={chartConfig}
        accessor='population'
        backgroundColor='transparent'
        paddingLeft='0'
      />

      <View style={styles.section}>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.right]}>SLTP</Text>
            <Text style={[{ flex: 0.5 }, styles.right]}>149</Text>
          </Row>
          <Row
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#457920',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginRight: 5,
              }}
            />
            <View
              style={{
                backgroundColor: '#956287',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginLeft: 5,
              }}
            />
          </Row>
          <Row style={{ flex: 1 }}>
            <Text style={{ flex: 0.5 }}>149</Text>
            <Text style={[styles.flex, styles.left]}>SD</Text>
          </Row>
        </Row>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.right]}>Tidak Sekolah</Text>
            <Text style={[{ flex: 0.5 }, styles.right]}>149</Text>
          </Row>
          <Row
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#457920',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginRight: 5,
              }}
            />
            <View
              style={{
                backgroundColor: '#956287',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginLeft: 5,
              }}
            />
          </Row>
          <Row style={{ flex: 1 }}>
            <Text style={{ flex: 0.5 }}>149</Text>
            <Text style={[styles.flex, styles.left]}>Putus Sekolah</Text>
          </Row>
        </Row>
      </View>
    </View>
  );
};

export default Population;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    alignItems: 'center',
    padding: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 10,
  },
  flex: {
    flex: 1,
  },
  man: {
    color: '#5293C7',
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
  manSign: {
    backgroundColor: '#5293C7',
    borderRadius: 5,
    padding: 5,
    width: '90%',
    marginRight: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  woman: {
    color: '#D0342C',
    textAlign: 'center',
  },
  womanSign: {
    backgroundColor: '#FFB3B3',
    borderRadius: 5,
    padding: 5,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
