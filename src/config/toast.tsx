import React from 'react';
import { StyleSheet } from 'react-native';
import { BaseToast } from 'react-native-toast-message';

const toastConfig = {
  standard: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftWidth: 0,
        borderRadius: 10,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: props.theme
          ? props.theme.colors.background
          : 'rgba(0, 0, 0, .9)',
      }}
      text1NumberOfLines={2}
      text1Style={[
        styles.title,
        { color: props.theme ? props.theme.colors.text : 'white' },
      ]}
      text2NumberOfLines={undefined}
      text2Style={[
        styles.subtitle,
        { color: props.theme ? props.theme.colors.text : 'white' },
      ]}
    />
  ),
};

export default toastConfig;

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: 'normal',
  },
});
