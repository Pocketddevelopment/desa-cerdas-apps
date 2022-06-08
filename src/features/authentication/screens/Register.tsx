import Input from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState<number>(0);

  const onPressNext = () => {
    setStep(step + 1);
    if (step === 1) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {step === 0 && (
        <View style={styles.form}>
          <Input placeholder='NIK e-KTP' />
          <Input placeholder='Nama lengkap sesuai e-KTP' />
          <Input placeholder='Tanggal Lahir' />
        </View>
      )}
      {step === 1 && (
        <View style={styles.form}>
          <Input placeholder='Email' />
          <Input placeholder='Nomor Telepon' />
          <Input placeholder='Password' />
          <Input placeholder='Konfirmasi Password' />
        </View>
      )}
      <Button mode='contained' onPress={onPressNext}>
        {step === 1 ? 'Buat Akun' : 'Lanjut'}
      </Button>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  form: {
    marginBottom: 30,
  },
});
