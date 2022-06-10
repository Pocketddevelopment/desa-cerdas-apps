import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import type { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

export default function TextInput(props: Partial<TextInputProps>) {
  return (
    <PaperTextInput
      underlineColor='transparent'
      underlineColorAndroid={'transparent'}
      activeUnderlineColor={'transparent'}
      selectionColor={'red'}
      dense
      mode='flat'
      {...props}
      style={[styles.container, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    marginVertical: 5,
    width: '100%',
    shadowOffset: {
      height: 5,
      width: 5,
      maxHeight: 60,
    },
    paddingVertical: 2,
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: 'white',
  },
});
