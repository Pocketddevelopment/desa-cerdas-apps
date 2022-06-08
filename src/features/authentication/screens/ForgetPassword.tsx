import Input from '@components/Input';
import DeviceContants from '@constants/device';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

const ForgetPasswordScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.description}>
          Kami akan mengirimkan pesan berisi password baru ke alamat email Anda
        </Text>
        <Input style={styles.input} placeholder={'Email / NIK'} />
        <Button>Kirim</Button>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  form: {
    width: DeviceContants.screenWidth - 80,
  },
  description: {
    textAlign: 'center',
  },
  input: {
    marginVertical: 15,
  },
});
