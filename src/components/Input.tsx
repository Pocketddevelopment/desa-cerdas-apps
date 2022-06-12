import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput as PaperTextInput, useTheme } from 'react-native-paper';
import type { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

type AdditionalTextInputProps = {
  shadow: boolean;
  suffixIcon: string;
};

export default function TextInput(
  props: Partial<TextInputProps & AdditionalTextInputProps>
) {
  const theme = useTheme();
  const isShadowPresent = props.shadow === undefined ? true : props.shadow;
  const newStyles = [styles.container, props.style];
  if (isShadowPresent) {
    newStyles.push(styles.shadow);
  }
  const rightIcon = props.suffixIcon ? (
    <PaperTextInput.Icon icon={props.suffixIcon} color={theme.colors.primary} />
  ) : null;
  return (
    <PaperTextInput
      underlineColor='transparent'
      underlineColorAndroid={'transparent'}
      activeUnderlineColor={'transparent'}
      selectionColor={theme.colors.primary}
      dense
      mode='flat'
      editable={props.suffixIcon ? false : true}
      {...props}
      right={rightIcon}
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
    height: 40,
  },
  shadow: {
    elevation: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
});
