import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

type ContainerProps = {
  children: JSX.Element[] | React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {children}
    </View>
  );
};

export default Container;
