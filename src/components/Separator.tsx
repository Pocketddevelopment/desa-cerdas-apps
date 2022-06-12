import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

interface SeparatorProps {
  style?: ViewStyle;
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Separator = ({ style, width, height, color }: SeparatorProps) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.separator,
        style,
        {
          width: width ? width : '100%',
          height: height ? height : 0.5,
          backgroundColor: color ? color : theme.colors.primary,
        },
        {},
      ]}
    />
  );
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    width: '100%',
    alignSelf: 'center',
  },
});
