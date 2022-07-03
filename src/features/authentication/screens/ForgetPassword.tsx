import Button from '@components/Button';
import Input from '@components/Input';
import { Text } from '@components/typography';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

interface ForgetPasswordForm {
  NIK: string;
}

const ForgetPasswordScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const theme = useTheme();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgetPasswordForm>();

  const onPressSend = () => {
    navigation.goBack();
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
                message: 'Email / NIK harus diisi',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                containerStyle={styles.input}
                placeholder={'Email / NIK'}
                shadow={false}
                onChangeText={onChange}
                value={value}
                maxLength={16}
                keyboardType={'email-address'}
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
