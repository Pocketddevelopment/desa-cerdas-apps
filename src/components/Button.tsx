import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Button as PaperButton, useTheme } from 'react-native-paper';
import Props from 'react-native-paper/lib/typescript/components/Button';

type ButtonAdditionalProps = {
  primary: boolean;
};

type ButtonProps = React.ComponentProps<typeof Props> & ButtonAdditionalProps;

export default function Button(props: Partial<ButtonProps>) {
  const theme = useTheme();

  const { mode, primary } = props;
  let color = theme.colors.background;

  const getLabelStyle = React.useMemo(() => {
    let color = theme.colors.background;
    if (mode === 'outlined') {
      if (primary) {
        color = theme.colors.primary;
      }
    }
    return {
      color: color,
    };
  }, []);

  const getAdditionalStyle: ViewStyle = React.useMemo(() => {
    let borderColor = theme.colors.accent;
    if (mode === 'outlined') {
      if (primary) {
        borderColor = theme.colors.primary;
      }
    }
    return {
      borderColor: borderColor,
    };
  }, []);

  return (
    // @ts-nocheck
    // @ts-expect-error
    <PaperButton
      mode='contained'
      uppercase={false}
      color={theme.colors.accent}
      labelStyle={getLabelStyle}
      {...props}
      style={[styles.container, getAdditionalStyle, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    borderWidth: 1.5,
  },
});
