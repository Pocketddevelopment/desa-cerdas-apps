import React from 'react';
import { StyleSheet } from 'react-native';
import { Text as PaperText, useTheme } from 'react-native-paper';
import type Props from 'react-native-paper/lib/typescript/components/Typography/Title';

type TextProps = {
  color?: string;
  size?: number;
  children: JSX.Element | JSX.Element[] | string;
  thickness?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
} & React.ComponentProps<typeof Props>;

const Title = (props: Partial<TextProps>) => {
  const theme = useTheme();
  const { color, size, thickness, children } = props;
  return (
    <PaperText
      {...props}
      style={[
        styles.default,
        {
          color: color || theme.colors.text,
          fontSize: size || 14,
          fontWeight: thickness || 'normal',
        },
        props.style,
      ]}>
      {children}
    </PaperText>
  );
};

export default Title;

const styles = StyleSheet.create({
  default: {
    lineHeight: undefined,
    letterSpacing: 0,
  },
});
