import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface RowProps {
  children: JSX.Element[] | React.ReactNode;
  style: ViewStyle[] | ViewStyle;
}

export default function Row({ children, style }: Partial<RowProps>) {
  return <View style={[propStyle.row, style]}>{children}</View>;
}

const propStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
