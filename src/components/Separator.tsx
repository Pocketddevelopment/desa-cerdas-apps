import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface SeparatorProps {
  style: ViewStyle;
}

const Separator = ({ style }: SeparatorProps) => {
  return <View style={[styles.separator, style]} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'red',
  },
});
