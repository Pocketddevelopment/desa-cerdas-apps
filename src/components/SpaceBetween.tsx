import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface SpaceBetweenProps {
  children: JSX.Element[] | React.ReactNode;
  styles: ViewStyle;
}

export default function SpaceBetween({
  children,
  styles,
}: Partial<SpaceBetweenProps>) {
  return <View style={[propStyle.row, styles]}>{children}</View>;
}

const propStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
