import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

type ContainerProps = {
  children: JSX.Element[] | React.ReactNode;
  style?: ViewStyle;
  color?: string | 'primary';
};

const Container = ({ children, color, style }: ContainerProps) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            color === 'primary'
              ? theme.colors.primary
              : theme.colors.background,
        },
        style,
      ]}>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  children: {
    width: '100%',
    alignItems: 'center',
  },
});
