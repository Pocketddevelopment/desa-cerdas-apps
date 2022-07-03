import onPressInterface from '@interfaces/Press.interface';
import React, { useState } from 'react';
import {
  KeyboardType,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
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
  counterColor: 'error' | 'info';
  errorMessage: string;
  errorColor: string;
};

export default function TextInput(
  props: Partial<TextInputProps & AdditionalTextInputProps>
) {
  const theme = useTheme();
  const {
    counter,
    containerStyle,
    type,
    counterColor,
    onPressSuffix,
    errorMessage,
    errorColor,
  } = props;
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
  if (errorMessage) {
    newStyles.push(styles.errorContainer, { borderColor: theme.colors.error });
  }

  const ContainerTag: React.ElementType = onPressSuffix
    ? TouchableOpacity
    : View;

  return (
    <ContainerTag
      style={[styles.container, containerStyle]}
      onPress={() => onPressSuffix && onPressSuffix()}>
      <PaperTextInput
        underlineColor='transparent'
        underlineColorAndroid={'transparent'}
        activeUnderlineColor={'transparent'}
        selectionColor={theme.colors.primary}
        dense
        type
        mode='flat'
        editable={onPressSuffix ? false : true}
        // error={!!errorMessage}
        {...props}
        style={[newStyles, props.style]}
        keyboardType={getKeyboardType()}
        right={getRightIcon()}
        secureTextEntry={type === 'password' && !showPassword}
      />
      {counter && props.maxLength && (
        <HelperText
          type={
            counterColor
              ? counterColor
              : props.value && props.value.length > props.maxLength
              ? 'error'
              : 'info'
          }
          style={styles.counter}>
          {props.value && props.value.length} / {props.maxLength}
        </HelperText>
      )}
      {errorMessage && (
        <HelperText
          type={'error'}
          style={[
            styles.counter,
            { color: errorColor ? errorColor : theme.colors.error },
          ]}>
          {errorMessage}
        </HelperText>
      )}
    </ContainerTag>
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
  errorContainer: {
    borderWidth: 1,
  },
  counter: {
    alignSelf: 'flex-start',
    paddingHorizontal: 0,
  },
});
