import Row from '@components/Row';
import { Text, Title } from '@components/typography';
import { useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { Colors, useTheme } from 'react-native-paper';

const UVIndexTable = () => {
  const theme = useTheme();
  const { weather } = useAppSelector((state: RootState) => state.misc);
  return (
    <View style={styles.container}>
      <Title size={16} style={{ textAlign: 'center' }}>
        Tabel Indeks UV
      </Title>
      <View style={styles.card}>
        <Row style={[styles.row, { backgroundColor: '#FFEBEB' }]}>
          <View style={{ flex: 1 }} />
          <View style={styles.contentCell}>
            <Text thickness='bold' size={12}>
              UVI
            </Text>
          </View>
          <View style={[styles.contentCell, { flex: 2 }]}>
            <Text thickness='bold' size={12}>
              Catatan
            </Text>
          </View>
        </Row>

        {weather?.TableUviDescription.map((e, i) => {
          return (
            <Row
              key={e.Description}
              style={[
                styles.row,
                { backgroundColor: i % 2 !== 0 ? '#FFEBEB' : 'white' },
              ]}>
              <View style={styles.titleCell}>
                <Text
                  thickness='900'
                  color={e.Hex}
                  size={14}
                  style={styles.indicator}>
                  {e.Description}
                </Text>
              </View>
              {e.List.map((el, j) => {
                return (
                  <View
                    key={el.Value}
                    style={[
                      styles.contentCell,
                      j === e.List.length - 1 ? styles.contentCellNote : null,
                    ]}>
                    <Text>{el.Value}</Text>
                  </View>
                );
              })}
            </Row>
          );
        })}
      </View>
      <Text
        size={12}
        color={theme.colors.primary}
        style={styles.source}
        onPress={() =>
          Linking.openURL(
            'https://www.bmkg.go.id/kualitas-udara/indeks-uv.bmkg'
          )
        }>
        https://www.bmkg.go.id/kualitas-udara/indeks-uv.bmkg
      </Text>
    </View>
  );
};

export default UVIndexTable;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
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
    paddingVertical: 8,
    alignItems: 'center',
  },
  titleCell: {
    flex: 1,
  },
  contentCell: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
  },
  contentCellNote: {
    flex: 2,
    alignItems: 'flex-start',
  },
  indicator: {
    paddingLeft: 10,
  },
  source: {
    marginTop: 8,
    textAlign: 'right',
  },
});
