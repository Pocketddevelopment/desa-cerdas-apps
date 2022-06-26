import Row from '@components/Row';
import { Text, Title } from '@components/typography';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const CAQIIndexTable = () => {
  return (
    <View style={styles.container}>
      <Title size={16} style={{ textAlign: 'center' }}>
        Tabel Indeks CAQI{' '}
        <Title thickness='normal' size={15}>
          (dalam μg/m3)
        </Title>
      </Title>
      <View style={styles.card}>
        <Row style={[styles.row, { backgroundColor: '#FFEBEB' }]}>
          <View style={{ flex: 1.5 }} />
          <View style={styles.contentCell}>
            <Row>
              <Text thickness='bold' size={12}>
                NO
              </Text>
              <Text thickness='bold' size={8} style={{ marginTop: 8 }}>
                2
              </Text>
            </Row>
          </View>
          <View style={styles.contentCell}>
            <Row>
              <Text thickness='bold' size={12}>
                O
              </Text>
              <Text thickness='bold' size={8} style={{ marginTop: 8 }}>
                3
              </Text>
            </Row>
          </View>
          <View style={styles.contentCell}>
            <Row>
              <Text thickness='bold' size={12}>
                PM
              </Text>
              <Text thickness='bold' size={8} style={{ marginTop: 8 }}>
                10
              </Text>
            </Row>
          </View>
          <View style={styles.contentCell}>
            <Row>
              <Text thickness='bold' size={14}>
                PM
              </Text>
              <Text thickness='bold' size={10} style={{ marginTop: 8 }}>
                2.5
              </Text>
            </Row>
          </View>
        </Row>

        <Row style={[styles.row]}>
          <View style={{ flex: 1.5 }}>
            <Text
              thickness='900'
              color='#00850C'
              size={15}
              style={styles.indicator}>
              Baik
            </Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'<50'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'<60'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'<25'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'<15'}</Text>
          </View>
        </Row>

        <Row style={[styles.row, { backgroundColor: '#FFEBEB' }]}>
          <View style={{ flex: 1.5 }}>
            <Text
              thickness='900'
              color='#53E060'
              size={15}
              style={styles.indicator}>
              Wajar
            </Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'50-100'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'60-120'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'25-50'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'15-30'}</Text>
          </View>
        </Row>

        <Row style={[styles.row]}>
          <View style={{ flex: 1.5 }}>
            <Text
              thickness='900'
              color='#F9C828'
              size={15}
              style={styles.indicator}>
              Sedang
            </Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'100-200'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'120-180'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'50-90'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'30-55'}</Text>
          </View>
        </Row>
        <Row style={[styles.row, { backgroundColor: '#FFEBEB' }]}>
          <View style={{ flex: 1.5 }}>
            <Text
              thickness='900'
              color='#FF3E3E'
              size={15}
              style={styles.indicator}>
              Buruk
            </Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'200-400'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'180-240'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'80-180'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'55-110'}</Text>
          </View>
        </Row>
        <Row style={[styles.row]}>
          <View style={{ flex: 1.5 }}>
            <Text
              thickness='900'
              color='#CC3333'
              size={15}
              style={styles.indicator}>
              Parah
            </Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'>400'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'>240'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'>180'}</Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'>110'}</Text>
          </View>
        </Row>
      </View>
    </View>
  );
};

export default CAQIIndexTable;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  card: {
    elevation: 5,
    backgroundColor: 'white',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    marginTop: 10,
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  row: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  contentCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    paddingLeft: 10,
  },
});
