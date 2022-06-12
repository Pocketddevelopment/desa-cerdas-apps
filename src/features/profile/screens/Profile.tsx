import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Button from '@components/Button';
import Placeman from '../components/Placeman';
import { Text, useTheme } from 'react-native-paper';
import SpaceBetween from '@components/SpaceBetween';
import DistrictHighlight from '../components/DistrictHighlight';
import Population from '@profile/components/Population';

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Peta_Desa_Langkura.jpg',
        }}
        style={styles.locationImage}
      />
      <Button mode='outlined' primary style={styles.btnMaps}>
        <Image
          source={{
            uri: 'https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png',
          }}
          style={styles.icon}
        />{' '}
        Google Maps
      </Button>
      <View style={[styles.section, { paddingHorizontal: 0 }]}>
        <SpaceBetween style={{ paddingHorizontal: 20 }}>
          <Text style={styles.sectionTitle}>Pemerintah Desa</Text>
          <Text style={{ color: theme.colors.primary }}>
            Lihat selengkapnya
          </Text>
        </SpaceBetween>
        <Placeman />
      </View>
      <View style={styles.section}>
        <SpaceBetween>
          <Text style={styles.sectionTitle}>BUM Desa</Text>
          <Text style={{ color: theme.colors.primary }}>
            Lihat selengkapnya
          </Text>
        </SpaceBetween>
        <View style={styles.sectionContent}>
          <DistrictHighlight />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Statistik Penduduk</Text>
        <View style={styles.sectionContent}>
          <Population />
        </View>
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  locationImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  btnMaps: {
    margin: 20,
    width: 'auto',
  },
  icon: {
    height: 20,
    width: 20,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  sectionContent: {
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});
