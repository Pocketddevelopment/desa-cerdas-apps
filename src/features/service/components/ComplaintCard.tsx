import Button from '@components/Button';
import Separator from '@components/Separator';
import { Caption, Text } from '@components/typography';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import ComplaintItem from './ComplaintItem';

const ComplaintCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const { loading, complaintList } = useAppSelector(
    (state: RootState) => state.service
  );

  const onPressCreateComplaint = () => {
    navigation.navigate('ComplaintForm');
  };

  return (
    <View style={styles.card}>
      <Caption>Keluhan Anda</Caption>
      <ScrollView>
        {loading.complaintList ? (
          <ActivityIndicator />
        ) : complaintList.ListSelfComplaint.length > 0 ? (
          <>
            {complaintList.ListSelfComplaint.map((item, i) => {
              return (
                <>
                  <ComplaintItem
                    key={item.ID + i}
                    id={item.ID}
                    date={item.Created}
                    thumbnailUri={item.ListImage[0].ImageUrl}
                    title={item.Subject}
                    description={item.Description}
                    count={item.ResponseCount}
                    resolved={item.StatusType === 'Closed'}
                  />
                  {i < complaintList.ListSelfComplaint.length && (
                    <Separator width={'85%'} />
                  )}
                </>
              );
            })}
          </>
        ) : (
          <Text style={{ textAlign: 'center', marginVertical: 30 }}>
            Anda belum memiliki keluhan saat ini
          </Text>
        )}
        <Button onPress={onPressCreateComplaint}>Buat Keluhan Baru</Button>
      </ScrollView>
    </View>
  );
};

export default ComplaintCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding: 10,
    width: DeviceContants.screenWidth - 40,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
});
