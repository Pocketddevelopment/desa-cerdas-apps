import Button from '@components/Button';
import SpaceBetween from '@components/SpaceBetween';
import { Text } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import { DashboardStackParamList } from '@dashboard/index';
import Population from '@profile/components/Population';
import { getDistrictProfileThunk } from '@profile/models/thunks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useEffect } from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import DistrictHighlight from '../components/DistrictHighlight';
import Placeman from '../components/Placeman';

export type ProfileScreenProps = {
  title: string;
};

const ProfileScreen: React.FC<
  NativeStackScreenProps<DashboardStackParamList, 'Profile'>
> = ({ navigation, route }) => {
  const { title } = route.params;
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { loading, profile } = useAppSelector(
    (state: RootState) => state.profile
  );

  useEffect(() => {
    if (profile.DistrictID === '') {
      navigation.setOptions({
        title: `Profil Desa ${title}`,
      });
      dispatch(getDistrictProfileThunk());
    } else {
      navigation.setOptions({
        title: `Profil Desa ${profile.Description}`,
      });
    }
  }, []);

  useEffect(() => {}, [profile]);

  const openMaps = () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${profile?.Latitude},${profile?.Longitude}`;
    const label = `Desa ${profile.Description}`;
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
      {loading.getDistrictProfile ? (
        <View style={styles.locationImage}>
          <ActivityIndicator />
        </View>
      ) : (
        <TouchableOpacity
          delayPressIn={80}
          onPress={() =>
            navigation.navigate('ImagePreview', {
              uri: profile.MapURL,
            })
          }>
          <Image
            source={{
              uri: profile.MapURL,
            }}
            style={styles.locationImage}
          />
        </TouchableOpacity>
      )}
      <Button
        mode='outlined'
        primary
        btnStyle={styles.btnMaps}
        onPress={openMaps}>
        <Image
          source={{
            uri: 'http://13.250.44.36:8001/assets/images/icon/icon-maps.png',
          }}
          style={styles.icon}
        />{' '}
        Google Maps
      </Button>
      <View style={[styles.section, { paddingHorizontal: 0 }]}>
        <SpaceBetween style={{ paddingHorizontal: 20 }}>
          <SectionTitle>Pemerintah Desa</SectionTitle>
          <Text
            color={theme.colors.primary}
            onPress={() => navigation.navigate('PlacemanList')}>
            Lihat selengkapnya
          </Text>
        </SpaceBetween>
        <Placeman />
      </View>
      <View style={[styles.section, { marginTop: 0 }]}>
        <SpaceBetween>
          <SectionTitle>BUM Desa</SectionTitle>
          <Text
            color={theme.colors.primary}
            onPress={() => navigation.navigate('DistrictHighlight')}>
            Lihat selengkapnya
          </Text>
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
    padding: 0,
    height: 50,
    width: 'auto',
  },
  icon: {
    height: 18,
    width: 18,
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
