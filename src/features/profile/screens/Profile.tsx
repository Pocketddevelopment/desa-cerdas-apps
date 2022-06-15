import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Button from '@components/Button';
import Placeman from '../components/Placeman';
import { useTheme } from 'react-native-paper';
import SpaceBetween from '@components/SpaceBetween';
import DistrictHighlight from '../components/DistrictHighlight';
import Population from '@profile/components/Population';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import SectionTitle from '@components/typography/SectionTitle';
import { Text } from '@components/typography';

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const openMaps = () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = '';
    const label = 'Desa';
    const url: string = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    }) as string;

    Linking.openURL(url);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ImagePreview', {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Peta_Desa_Langkura.jpg',
          })
        }>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Peta_Desa_Langkura.jpg',
          }}
          style={styles.locationImage}
        />
      </TouchableOpacity>
      <Button
        mode='outlined'
        primary
        btnStyle={styles.btnMaps}
        onPress={openMaps}>
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
          <SectionTitle>Pemerintah Desa</SectionTitle>
          <Text color={theme.colors.primary}>Lihat selengkapnya</Text>
        </SpaceBetween>
        <Placeman />
      </View>
      <View style={styles.section}>
        <SpaceBetween>
          <SectionTitle>BUM Desa</SectionTitle>
          <Text color={theme.colors.primary}>Lihat selengkapnya</Text>
        </SpaceBetween>
        <View style={styles.sectionContent}>
          <DistrictHighlight />
        </View>
      </View>
      <View style={styles.section}>
        <SectionTitle>Statistik Penduduk</SectionTitle>
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
