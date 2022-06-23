import { AuthContext } from '@@@/App';
import Button from '@components/Button';
import Input from '@components/Input';
import Row from '@components/Row';
import SpaceBetween from '@components/SpaceBetween';
import DeviceContants from '@constants/device';
import CheckBoxStatus from '@interfaces/enums/CheckBoxStatus.enum';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Checkbox, Text, useTheme } from 'react-native-paper';
import { AuthenticationStackParamList } from '..';

const LoginScreen: React.FC = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationStackParamList>>();

  const { logIn }: any = React.useContext(AuthContext);
  const [rememberMe, setRememberMe] = useState<CheckBoxStatus>(
    CheckBoxStatus.UNCHECKED
  );

  const onPressRemember = () => {
    if (rememberMe === CheckBoxStatus.CHECKED) {
      setRememberMe(CheckBoxStatus.UNCHECKED);
    } else {
      setRememberMe(CheckBoxStatus.CHECKED);
    }
  };

  const onPressLogin = () => {
    logIn();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <ImageBackground
        style={styles.background}
        resizeMode={'cover'}
        source={require('@assets/onboarding/background-login.webp')}>
        <Image source={require('@assets/logo-desa.png')} style={styles.logo} />
        <View style={styles.formLogin}>
          <Input placeholder='Email / NIK' shadow={false} />
          <SpaceBetween>
            <Input
              placeholder='Password'
              containerStyle={{ flex: 1 }}
              shadow={false}
            />
            <Button
              btnStyle={styles.btnLogin}
              style={{ width: 'auto' }}
              onPress={onPressLogin}>
              Masuk
            </Button>
          </SpaceBetween>
          <SpaceBetween>
            <Row>
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
    resizeMode: 'contain',
    marginBottom: 10,
  },
  iconBiometric: {
    height: 60,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  btnLogin: { width: 'auto', marginLeft: 10 },
  forget: {
    textDecorationLine: 'underline',
  },
});
