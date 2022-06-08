import Input from '@components/Input';
import Row from '@components/Row';
import SpaceBetween from '@components/SpaceBetween';
import DeviceContants from '@constants/device';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '@@@/App';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Checkbox, Text } from 'react-native-paper';
import { AuthenticationStackParamList } from '..';

const LoginScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationStackParamList>>();

  const { logIn }: any = React.useContext(AuthContext);

  const onPressLogin = () => {
    logIn();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/onboarding/biometric-icon.png')}
        style={styles.logo}
      />
      <View style={styles.formLogin}>
        <Input />
        <SpaceBetween>
          <Input style={{ flex: 1 }} />
          <Button onPress={onPressLogin}>Masuk</Button>
        </SpaceBetween>
        <SpaceBetween styles={{ marginTop: 10 }}>
          <Row>
            <Checkbox status='unchecked' />
            <Text>aasdf</Text>
          </Row>
          <Text onPress={() => navigation.navigate('ForgetPassword')}>
            Lupa password?
          </Text>
        </SpaceBetween>
      </View>
      <View style={styles.footer}>
        <Image
          source={require('@assets/onboarding/biometric-icon.png')}
          style={styles.iconBiometric}
        />
        <Text onPress={() => navigation.navigate('Register')}>
          Daftar akun baru
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  formLogin: {
    marginVertical: 40,
    width: DeviceContants.screenWidth - 80,
  },
  footer: {
    alignItems: 'center',
  },
  logo: {
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  iconBiometric: {
    height: 60,
    resizeMode: 'contain',
    marginBottom: 30,
  },
});
