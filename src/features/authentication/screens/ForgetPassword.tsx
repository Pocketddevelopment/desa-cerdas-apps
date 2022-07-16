import { forgotPasswordThunk } from '@authentication/models/thunks';
import Button from '@components/Button';
import Input from '@components/Input';
import { Text } from '@components/typography';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch } from '@store/hooks';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';

interface ForgetPasswordForm {
  NIK: string;
}

const ForgetPasswordScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgetPasswordForm>();

  const onPressSend = async (values: ForgetPasswordForm) => {
    await dispatch(forgotPasswordThunk(values.NIK))
      .unwrap()
      .then((response) => {
        Toast.show({
          type: 'standard',
          text1: response.ResponseMessage,
        });
        setTimeout(() => {
          navigation.goBack();
        }, 2000);
      })
      .catch((err) => {
        Toast.show({
          type: 'standard',
          text1: err.ResponseMessage,
        });
      });
  };

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
          <Controller
            name='NIK'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'NIK harus diisi',
              },
              pattern: {
                value: /^\d{16}$/,
                message: 'Pastikan NIK Anda sesuai',
              },
              maxLength: 16,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                containerStyle={styles.input}
                style={{ textAlign: 'center' }}
                placeholder={'NIK'}
                shadow={false}
                onChangeText={onChange}
                value={value}
                maxLength={16}
                keyboardType={'numeric'}
                errorMessage={errors?.NIK?.message}
                errorColor={theme.colors['error-secondary']}
              />
            )}
          />
          <Button
            btnStyle={{ width: '30%' }}
            onPress={handleSubmit(onPressSend)}>
            Kirim
          </Button>
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
