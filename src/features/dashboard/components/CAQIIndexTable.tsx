import Row from '@components/Row';
import { Text, Title } from '@components/typography';
import { useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const CAQIIndexTable = () => {
  const { weather } = useAppSelector((state: RootState) => state.misc);
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

        {weather?.TableDescription.map((e, i) => {
          return (
            <Row key={i} style={[styles.row]}>
              <View style={{ flex: 1.5 }}>
                <Text
                  thickness='900'
                  color={e.Hex}
                  size={15}
                  style={styles.indicator}>
                  {e.Description}
                </Text>
              </View>
              {e.List.map((el) => {
                return (
                  <View key={el.Value} style={styles.contentCell}>
                    <Text>{el.Value}</Text>
                  </View>
                );
              })}
            </Row>
          );
        })}
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
