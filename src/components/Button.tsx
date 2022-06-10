import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton, useTheme } from 'react-native-paper';
import Props from 'react-native-paper/lib/typescript/components/Button';

type ButtonProps = React.ComponentProps<typeof Props>;

export default function Button(props: Partial<ButtonProps>) {
  const theme = useTheme();
  return (
    // @ts-nocheck
    //@ts-expect-error
    <PaperButton
      mode='contained'
      uppercase={false}
      color={theme.colors.accent}
      labelStyle={{
        color: theme.colors.background,
      }}
      {...props}
      style={[styles.container, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
  },
});
