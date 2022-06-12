import Button from '@components/Button';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption, Text } from 'react-native-paper';

const ComplaintCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPressCreateComplaint = () => {
    navigation.navigate('ComplaintForm');
  };

  return (
    <View style={styles.card}>
      <Caption>Keluhan Anda</Caption>
      <Text style={{ textAlign: 'center', marginVertical: 30 }}>
        Anda belum memiliki keluhan saat ini
      </Text>
      <Button onPress={onPressCreateComplaint}>Buat Keluhan Baru</Button>
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
