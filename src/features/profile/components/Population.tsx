import Row from '@components/Row';
import { Caption, Text } from '@components/typography';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

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

      <Image
        source={require('@assets/profile/population-chart.png')}
        style={styles.populationChart}
      />

      <View style={styles.section}>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.man, styles.right]}>2.39%</Text>
            <Text style={[styles.flex, styles.right]}>14519</Text>
          </Row>
          <Caption
            style={{ marginHorizontal: 10, flex: 1, textAlign: 'center' }}>
            Belum Kawin
          </Caption>
          <Row style={{ flex: 1 }}>
            <Text style={styles.flex}>145</Text>
            <Text style={[styles.flex, styles.woman, styles.left]}>24.39%</Text>
          </Row>
        </Row>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.man, styles.right]}>0.39%</Text>
            <Text style={[styles.flex, styles.right]}>19</Text>
          </Row>
          <Caption
            style={{ marginHorizontal: 10, flex: 1, textAlign: 'center' }}>
            Kawin
          </Caption>
          <Row style={{ flex: 1 }}>
            <Text style={styles.flex}>459</Text>
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
            Cerai
          </Caption>
          <Row style={{ flex: 1 }}>
            <Text style={styles.flex}>159</Text>
            <Text style={[styles.flex, styles.woman, styles.left]}>24.9%</Text>
          </Row>
        </Row>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.man, styles.right]}>24.39%</Text>
            <Text style={[styles.flex, styles.right]}>159</Text>
          </Row>
          <Caption
            style={{ marginHorizontal: 10, flex: 1, textAlign: 'center' }}>
            Hidup Cerai
          </Caption>
          <Row style={{ flex: 1 }}>
            <Text style={styles.flex}>9</Text>
            <Text style={[styles.flex, styles.woman, styles.left]}>4.39%</Text>
          </Row>
        </Row>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.man, styles.right]}>2.39%</Text>
            <Text style={[styles.flex, styles.right]}>159</Text>
          </Row>
          <Caption
            style={{ marginHorizontal: 10, flex: 1, textAlign: 'center' }}>
            Mati
          </Caption>
          <Row style={{ flex: 1 }}>
            <Text style={styles.flex}>14519</Text>
            <Text style={[styles.flex, styles.woman, styles.left]}>24.39%</Text>
          </Row>
        </Row>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.man, styles.right]}>14.39%</Text>
            <Text style={[styles.flex, styles.right]}>149</Text>
          </Row>
          <Caption
            style={{ marginHorizontal: 10, flex: 1, textAlign: 'center' }}>
            Belum Mengisi
          </Caption>
          <Row style={{ flex: 1 }}>
            <Text style={styles.flex}>159</Text>
            <Text style={[styles.flex, styles.woman, styles.left]}>32.9%</Text>
          </Row>
        </Row>
      </View>

      <Image
        source={require('@assets/profile/education-chart.png')}
        style={styles.educationChart}
      />
      <View style={styles.section}>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.right]} size={11}>
              Tidak Sekolah
            </Text>
            <Caption style={[{ flex: 0.7 }, styles.right]}>11.00%</Caption>
          </Row>
          <Row
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#3366CC',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginRight: 5,
              }}
            />
            <View
              style={{
                backgroundColor: '#DC3912',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginLeft: 5,
              }}
            />
          </Row>
          <Row style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Caption style={[{ flex: 0.7 }, styles.left]}>13.09%</Caption>
            <Text style={[styles.flex, styles.left]} size={11}>
              Putus SD
            </Text>
          </Row>
        </Row>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.right]} size={11}>
              SD
            </Text>
            <Caption style={[{ flex: 0.7 }, styles.right]}>40.29%</Caption>
          </Row>
          <Row
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#FF9900',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginRight: 5,
              }}
            />
            <View
              style={{
                backgroundColor: '#109618',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginLeft: 5,
              }}
            />
          </Row>
          <Row style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Caption style={[{ flex: 0.7 }, styles.left]}>22.67%</Caption>
            <Text style={[styles.flex, styles.left]} size={11}>
              SLTP
            </Text>
          </Row>
        </Row>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.right]} size={11}>
              SLTA
            </Text>
            <Caption style={[{ flex: 0.7 }, styles.right]}>12.27%</Caption>
          </Row>
          <Row
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#990099',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginRight: 5,
              }}
            />
            <View
              style={{
                backgroundColor: '#313131',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginLeft: 5,
              }}
            />
          </Row>
          <Row style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Caption style={[{ flex: 0.7 }, styles.left]}>0.00%</Caption>
            <Text style={[styles.flex, styles.left]} size={11}>
              D1/D2
            </Text>
          </Row>
        </Row>
        <Row style={{ width: '100%' }}>
          <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.flex, styles.right]} size={11}>
              D3
            </Text>
            <Caption style={[{ flex: 0.7 }, styles.right]}>0.30%</Caption>
          </Row>
          <Row
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#DD4477',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginRight: 5,
              }}
            />
            <View
              style={{
                backgroundColor: '#66AA00',
                borderRadius: 100,
                width: 10,
                height: 10,
                marginLeft: 5,
              }}
            />
          </Row>
          <Row style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Caption style={[{ flex: 0.7 }, styles.left]}>0.35%</Caption>
            <Text style={[styles.flex, styles.left]} size={11}>
              Strata1/2/3
            </Text>
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
    marginBottom: 20,
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
  populationChart: {
    height: 300,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  educationChart: {
    height: 200,
    aspectRatio: 1,
    resizeMode: 'cover',
    marginTop: 40,
  },
});
