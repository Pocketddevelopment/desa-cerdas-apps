import onPressInterface from '@interfaces/Press.interface';
import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import { Text } from './typography';

type FailedProps = {
  onBtnPress: onPressInterface;
};

const Failed: React.FC<FailedProps> = ({ onBtnPress }) => {
  return (
    <View>
      <Text>Gagal memuat data</Text>
      <Button onPress={onBtnPress}>Coba lagi</Button>
    </View>
  );
};

export default Failed;
