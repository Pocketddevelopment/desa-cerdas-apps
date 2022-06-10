import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import type { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

type AdditionalTextInputProps = {
  shadow: boolean;
};

export default function TextInput(
  props: Partial<TextInputProps & AdditionalTextInputProps>
) {
  const isShadowPresent = props.shadow === undefined ? true : props.shadow;
  const newStyles = [styles.container, props.style];
  if (isShadowPresent) {
    newStyles.push(styles.shadow);
  }
  return (
    <PaperTextInput
      underlineColor='transparent'
      underlineColorAndroid={'transparent'}
      activeUnderlineColor={'transparent'}
      selectionColor={'red'}
      dense
      mode='flat'
      {...props}
      style={newStyles}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: '100%',
    paddingVertical: 2,
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: 'white',
    maxHeight: 60,
  },
  shadow: {
    elevation: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
});
