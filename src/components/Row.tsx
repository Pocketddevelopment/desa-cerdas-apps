import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface RowProps {
  children: JSX.Element[] | React.ReactNode;
  styles: ViewStyle;
}

export default function Row({ children, styles }: Partial<RowProps>) {
  return <View style={[propStyle.row, styles]}>{children}</View>;
}

const propStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
