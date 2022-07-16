import onPressInterface from '@interfaces/Press.interface';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';
import { Text } from './typography';

type FailedProps = {
  onBtnPress: onPressInterface;
};

const Failed: React.FC<FailedProps> = ({ onBtnPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gagal memuat data</Text>
      <Button onPress={onBtnPress}>Coba lagi</Button>
    </View>
  );
};

export default Failed;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    marginVertical: 10,
  },
});
