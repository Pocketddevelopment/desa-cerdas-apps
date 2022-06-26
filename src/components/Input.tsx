import onPressInterface from '@interfaces/Press.interface';
import React, { useState } from 'react';
import { KeyboardType, StyleSheet, View, ViewStyle } from 'react-native';
import {
  HelperText,
  TextInput as PaperTextInput,
  useTheme,
} from 'react-native-paper';
import type { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

type AdditionalTextInputProps = {
  shadow: boolean;
  type: 'email' | 'password' | 'phone' | 'url';
  suffixIcon: string;
  onPressSuffix: onPressInterface;
  counter?: boolean;
  containerStyle: ViewStyle;
};

export default function TextInput(
  props: Partial<TextInputProps & AdditionalTextInputProps>
) {
  const theme = useTheme();
  const [text, setText] = useState<string>('');
  const { counter, containerStyle, type, onPressSuffix } = props;
  const isShadowPresent = props.shadow === undefined ? true : props.shadow;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const getKeyboardType = (): KeyboardType => {
    if (type === 'email') {
      return 'email-address';
    } else if (type === 'password' || type === 'url') {
      return 'default';
    } else if (type === 'phone') {
      return 'phone-pad';
    }
    return 'default';
  };

  const getRightIcon = (): JSX.Element => {
    const rightIcon = props.suffixIcon ? (
      <PaperTextInput.Icon
        icon={props.suffixIcon}
        color={theme.colors.primary}
        onPress={() => onPressSuffix && onPressSuffix()}
      />
    ) : null;
    if (type === 'password') {
      return (
        <PaperTextInput.Icon
          icon={showPassword ? 'eye' : 'eye-off'}
          color={'black'}
          onPress={() => setShowPassword(!showPassword)}
        />
      );
    } else if (rightIcon) {
      return rightIcon;
    } else {
      return <></>;
    }
  };
  const newStyles: ViewStyle[] = [styles.inputContainer];
  if (isShadowPresent) {
    newStyles.push(styles.shadow);
  }
  return (
    <View style={[styles.container, containerStyle]}>
      <PaperTextInput
        underlineColor='transparent'
        underlineColorAndroid={'transparent'}
        activeUnderlineColor={'transparent'}
        selectionColor={theme.colors.primary}
        dense
        type
        mode='flat'
        editable={props.suffixIcon ? false : true}
        {...props}
        style={[newStyles, props.style]}
        onChangeText={(value: string) => setText(value)}
        keyboardType={getKeyboardType()}
        right={getRightIcon()}
        secureTextEntry={type === 'password' && !showPassword}
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
