import Row from '@components/Row';
import { Text, Title } from '@components/typography';
import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { Colors, useTheme } from 'react-native-paper';

const UVIndexTable = () => {
  const theme = useTheme();
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

        <Row style={[styles.row]}>
          <View style={styles.title}>
            <Text
              thickness='900'
              color='#00850C'
              size={15}
              style={styles.indicator}>
              Rendah
            </Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'<2'}</Text>
          </View>
          <View style={[styles.contentCell, styles.contentCellNote]}>
            <Text size={13}>
              {
                'Gunakan cairan pelembab tabir surya SPF 30+ bagi kulit sensitif'
              }
            </Text>
          </View>
        </Row>

        <Row style={[styles.row, { backgroundColor: '#FFEBEB' }]}>
          <View style={styles.title}>
            <Text
              thickness='900'
              color='#53E060'
              size={15}
              style={styles.indicator}>
              Sedang
            </Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'3-5'}</Text>
          </View>
          <View style={[styles.contentCell, styles.contentCellNote]}>
            <Text size={13}>
              {'Gunakan cairan pelembab tabir surya SPF 30+ setiap 2 jam'}
            </Text>
          </View>
        </Row>

        <Row style={[styles.row]}>
          <View style={styles.title}>
            <Text
              thickness='900'
              color='#F9C828'
              size={15}
              style={styles.indicator}>
              Tinggi
            </Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'6-7'}</Text>
          </View>
          <View style={[styles.contentCell, styles.contentCellNote]}>
            <Text size={13}>
              {'Kurangi waktu di bawah paparan matahari antara pukul 10-4 sore'}
            </Text>
          </View>
        </Row>
        <Row style={[styles.row, { backgroundColor: '#FFEBEB' }]}>
          <View style={styles.title}>
            <Text
              thickness='900'
              color='#FF3E3E'
              size={15}
              style={styles.indicator}>
              Berbahaya
            </Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'8-10'}</Text>
          </View>
          <View style={[styles.contentCell, styles.contentCellNote]}>
            <Text size={13}>
              {'Tindakan pencegahan ekstra, kulit & mata dapat cepat terbakar'}
            </Text>
          </View>
        </Row>
        <Row style={[styles.row]}>
          <View style={styles.title}>
            <Text
              thickness='900'
              color='#CC3333'
              size={15}
              style={styles.indicator}>
              Ekstrim
            </Text>
          </View>
          <View style={styles.contentCell}>
            <Text>{'>11'}</Text>
          </View>
          <View style={[styles.contentCell, styles.contentCellNote]}>
            <Text size={13}>
              {'Kulit & mata dapat rusak dan terbakar dalam hitungan menit'}
            </Text>
          </View>
        </Row>
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
  title: {
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
