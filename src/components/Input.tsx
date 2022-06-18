import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import {
  HelperText,
  TextInput as PaperTextInput,
  useTheme,
} from 'react-native-paper';
import type { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

type AdditionalTextInputProps = {
  shadow: boolean;
  suffixIcon: string;
  counter?: boolean;
  containerStyle: ViewStyle;
};

export default function TextInput(
  props: Partial<TextInputProps & AdditionalTextInputProps>
) {
  const theme = useTheme();
  const [text, setText] = useState<string>('');
  const { counter, containerStyle, style } = props;
  const isShadowPresent = props.shadow === undefined ? true : props.shadow;
  const newStyles: ViewStyle[] = [styles.inputContainer];
  if (isShadowPresent) {
    newStyles.push(styles.shadow);
  }
  const rightIcon = props.suffixIcon ? (
    <PaperTextInput.Icon icon={props.suffixIcon} color={theme.colors.primary} />
  ) : null;
  return (
    <View style={[styles.container, containerStyle]}>
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
        style={[newStyles, props.style]}
        onChangeText={(value: string) => setText(value)}
      />
      {counter && props.maxLength && (
        <HelperText
          type={text.length > props.maxLength ? 'error' : 'info'}
          style={styles.counter}>
          {text.length} / {props.maxLength}
        </HelperText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: '100%',
  },
  inputContainer: {
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: 'white',
    paddingVertical: 2,
  },
  shadow: {
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  counter: {
    alignSelf: 'flex-end',
    paddingHorizontal: 0,
  },
});
