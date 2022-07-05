import { AuthContext } from '@@@/App';
import AuthenticationRedux from '@authentication/models/interfaces/AuthenticationRedux.interface';
import { LoginInputForm } from '@authentication/models/interfaces/requests/LoginRequest.interface';
import { loginThunk } from '@authentication/models/thunks';
import Button from '@components/Button';
import Input from '@components/Input';
import Row from '@components/Row';
import SpaceBetween from '@components/SpaceBetween';
import DeviceContants from '@constants/device';
import StoreConstants from '@constants/store';
import CheckBoxStatus from '@interfaces/enums/CheckBoxStatus.enum';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import Storage from '@utils/async-storage';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Checkbox, Text, useTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { AuthenticationStackParamList } from '..';

const LoginScreen: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(
    (state: RootState) => state.authentication
  );
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationStackParamList>>();

  const { logIn }: any = React.useContext(AuthContext);
  const [rememberMe, setRememberMe] = useState<CheckBoxStatus>(
    CheckBoxStatus.UNCHECKED
  );

  useEffect(() => {}, []);

  // Form control
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginInputForm>();

  const onPressRemember = () => {
    if (rememberMe === CheckBoxStatus.CHECKED) {
      setRememberMe(CheckBoxStatus.UNCHECKED);
    } else {
      setRememberMe(CheckBoxStatus.CHECKED);
    }
  };

  const onPressLogin = (data: LoginInputForm) => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(() => {
        logIn();
      })
      .catch((err: any) => {
        Toast.show({
          type: 'standard',
          text1: err.ResponseMessage,
        });
      });
    if (rememberMe === 'checked') {
      Storage.setItem(StoreConstants.AUTO_LOGIN, true);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <ImageBackground
        style={styles.background}
        resizeMode={'cover'}
        source={require('@assets/onboarding/background-login.webp')}>
        <Image source={require('@assets/logo-desa.png')} style={styles.logo} />
        <View style={styles.formLogin}>
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
                placeholder='Email / NIK'
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
          <SpaceBetween>
            <Controller
              name='Password'
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Password harus diisi',
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  type='password'
                  placeholder='Password'
                  containerStyle={{ flex: 1 }}
                  shadow={false}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors?.Password?.message}
                  errorColor={theme.colors['error-secondary']}
                />
              )}
            />
            <Button
              btnStyle={[
                styles.btnLogin,
                errors?.Password?.message && {
                  alignSelf: 'flex-start',
                  marginTop: 5,
                },
              ]}
              loading={loading.account}
              style={{ width: 'auto' }}
              onPress={handleSubmit(onPressLogin)}>
              Masuk
            </Button>
          </SpaceBetween>
          <SpaceBetween>
            <Row style={{ marginLeft: -10 }}>
              <Checkbox
                status={rememberMe}
                color={theme.colors.background}
                uncheckedColor={theme.colors.background}
                onPress={onPressRemember}
              />
              <Text style={{ color: theme.colors.background }}>Ingat saya</Text>
            </Row>
            <Text
              style={[styles.forget, { color: theme.colors.background }]}
              onPress={() => navigation.navigate('ForgetPassword')}>
              Lupa password?
            </Text>
          </SpaceBetween>
        </View>
        <View style={styles.footer}>
          <Image
            source={require('@assets/onboarding/biometric-icon.png')}
            style={styles.iconBiometric}
          />
          <Text
            style={[styles.forget, { color: theme.colors.background }]}
            onPress={() => navigation.navigate('Register')}>
            Daftar akun baru
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: DeviceContants.screenWidth,
  },
  formLogin: {
    marginVertical: 40,
    width: DeviceContants.screenWidth - 80,
  },
  footer: {
    alignItems: 'center',
  },
  logo: {
    height: 250,
    aspectRatio: 1,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  iconBiometric: {
    height: 60,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  btnLogin: { width: 'auto', height: 'auto', marginLeft: 10 },
  forget: {
    textDecorationLine: 'underline',
  },
});
