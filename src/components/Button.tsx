import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Button as PaperButton, useTheme } from 'react-native-paper';
import Props from 'react-native-paper/lib/typescript/components/Button';

type ButtonAdditionalProps = {
  primary: boolean;
  btnStyle:
    | ViewStyle
    | ViewStyle[]
    | StyleProp<ViewStyle>
    | StyleProp<ViewStyle>[]
    | undefined
    | any;
};

type ButtonProps = React.ComponentProps<typeof Props> & ButtonAdditionalProps;

export default function Button(props: Partial<ButtonProps>) {
  const theme = useTheme();

  const { mode, primary, loading } = props;
  let mainColor = theme.colors.accent;

  const getLabelStyle = React.useMemo(() => {
    let color = theme.colors.background;
    if (mode === 'outlined') {
      if (primary) {
        color = theme.colors.primary;
        mainColor = theme.colors.primary;
      } else {
        color = theme.colors.accent;
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
      borderWidth: loading ? 0 : 1,
    };
  }, [loading]);

  return (
    // @ts-nocheck
    // @ts-expect-error
    <PaperButton
      mode='contained'
      uppercase={false}
      color={mainColor}
      labelStyle={getLabelStyle}
      disabled={props.loading}
      {...props}
      style={[props.btnStyle]}
      contentStyle={[styles.container, getAdditionalStyle, props.style]}
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
