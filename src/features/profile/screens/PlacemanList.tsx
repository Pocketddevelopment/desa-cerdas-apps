import Button from '@components/Button';
import Failed from '@components/Failed';
import { DashboardStackParamList } from '@dashboard/index';
import PlacemanCard from '@profile/components/PlacemanCard';
import {
  getDistrictOrganizationStructureThunk,
  getDistrictProfileThunk,
} from '@profile/models/thunks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const PlacemanListScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const dispatch = useAppDispatch();
  const { loading, profile, structure } = useAppSelector(
    (state: RootState) => state.profile
  );

  useEffect(() => {
    if (profile.DistrictID === '') {
      dispatch(getDistrictProfileThunk());
    }
    if (structure.length <= 0) {
      dispatch(getDistrictOrganizationStructureThunk());
    }
  }, [profile, structure]);

  const openChart = () => {
    navigation.navigate('ImagePreview', {
      uri: 'http://13.250.44.36:8001/assets/images/struktur-oraganisas.png',
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Button
        mode='outlined'
        primary
        btnStyle={styles.btnMaps}
        onPress={openChart}
        loading={loading.getDistrictProfile}>
        Bagan Pemerintahan
      </Button>
      {loading.getDistrictOrganizationStructure ? (
        <ActivityIndicator size={'large'} style={styles.loading} />
      ) : structure.length > 0 ? (
        structure.map((e) => (
          <PlacemanCard
            key={e.NIK}
            thumbnailUri={e.ImageURL}
            name={e.FullName.toUpperCase()}
            position={e.Title}
            phone={e.MobileNo}
            idNumber={e.NIK}
          />
        ))
      ) : (
        <Failed
          onBtnPress={() => dispatch(getDistrictOrganizationStructureThunk())}
        />
      )}
    </ScrollView>
  );
};

export default PlacemanListScreen;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 15,
  },
  btnMaps: {
    margin: 5,
    width: 'auto',
  },
  loading: { marginTop: 20 },
});
