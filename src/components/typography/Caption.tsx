import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme, Caption as PaperCaption } from 'react-native-paper';
import type Props from 'react-native-paper/lib/typescript/components/Typography/Caption';

type TextProps = {
  color?: string;
  size?: number;
  children: JSX.Element | JSX.Element[] | string | any;
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

const Caption = (props: Partial<TextProps>) => {
  const theme = useTheme();
  const { color, size, thickness, children } = props;
  return (
    <PaperCaption
      {...props}
      style={[
        styles.default,
        {
          color: color || theme.colors.caption,
          fontSize: size || 13,
          fontWeight: thickness || 'normal',
        },
        props.style,
      ]}>
      {children}
    </PaperCaption>
  );
};

export default Caption;

const styles = StyleSheet.create({
  default: {
    lineHeight: undefined,
    letterSpacing: 0,
  },
});
