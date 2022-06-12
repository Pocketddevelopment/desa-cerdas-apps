import Separator from '@components/Separator';
import DeviceContants from '@constants/device';
import onPressInterface from '@interfaces/Press.interface';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Caption, Title } from 'react-native-paper';

type ServiceCardProps = {
  title: string;
  description: string;
  onPress: onPressInterface;
};

const ServiceCard = ({ title, description, onPress }: ServiceCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Title
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          lineHeight: undefined,
        }}>
        {title}
      </Title>
      <Separator
        height={2}
        color={'lightgrey'}
        style={{ marginVertical: 20 }}
      />
      <Caption style={{ textAlign: 'center' }}>{description}</Caption>
    </TouchableOpacity>
  );
};

export default ServiceCard;

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
    width: DeviceContants.screenWidth - 50,
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: 'center',
    marginBottom: 20,
  },
});
