import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface SpaceBetweenProps {
  children: JSX.Element[] | React.ReactNode;
  style: ViewStyle;
}

export default function SpaceBetween({
  children,
  style,
}: Partial<SpaceBetweenProps>) {
  return <View style={[propStyle.row, style]}>{children}</View>;
}

const propStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
