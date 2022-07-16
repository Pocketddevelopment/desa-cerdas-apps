import Failed from '@components/Failed';
import { getDistrictOrganizationStructureThunk } from '@profile/models/thunks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import PlacemanCard from './PlacemanCard';

const Placeman = () => {
  const dispatch = useAppDispatch();
  const { loading, structure } = useAppSelector(
    (state: RootState) => state.profile
  );

  useEffect(() => {
    if (structure.length <= 0) {
      dispatch(getDistrictOrganizationStructureThunk());
    }
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 10,
      }}>
      {loading.getDistrictOrganizationStructure ? (
        <ActivityIndicator style={styles.loading} />
      ) : structure.length > 0 ? (
        structure
          .slice(0, 4)
          .map((e) => (
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

export default Placeman;

const styles = StyleSheet.create({
  loading: { padding: 20 },
});
