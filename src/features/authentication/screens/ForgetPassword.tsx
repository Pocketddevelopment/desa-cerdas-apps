import Button from '@components/Button';
import Input from '@components/Input';
import { Text } from '@components/typography';
import DeviceContants from '@constants/device';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const ForgetPasswordScreen: React.FC = () => {
  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <ImageBackground
        style={styles.background}
        resizeMode={'cover'}
        source={require('@assets/onboarding/background-login.webp')}>
        <View style={styles.form}>
          <Text style={styles.description} size={16} color={'white'}>
            Kami akan mengirimkan pesan berisi password baru ke alamat email
            Anda
          </Text>
          <Input containerStyle={styles.input} placeholder={'Email / NIK'} />
          <Button btnStyle={{ width: '30%' }}>Kirim</Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: DeviceContants.screenWidth,
  },
  form: {
    alignItems: 'center',
    width: DeviceContants.screenWidth - 100,
  },
  description: {
    textAlign: 'center',
  },
  input: {
    marginVertical: 25,
  },
});
