import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import Props from 'react-native-paper/lib/typescript/components/Button';

type ButtonProps = React.ComponentProps<typeof Props>;

export default function Button(props: Partial<ButtonProps>) {
  return (
    // @ts-expect-error
    <PaperButton
      mode='contained'
      uppercase={false}
      {...props}
      style={[styles.container, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
  },
});
