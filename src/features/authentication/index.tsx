import { Stack } from '@@@/App';
import React from 'react';
import ForgetPasswordScreen from './screens/ForgetPassword';
import LoginScreen from './screens/Login';
import OnboardingScreen from './screens/Onboarding';
import RegisterScreen from './screens/Register';

export default function AuthenticationScreens(): JSX.Element[] {
  return [
    <>
      <Stack.Screen
        name='Onboarding'
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
        options={{
          title: 'Daftar Baru',
        }}
      />
      <Stack.Screen
        name='ForgetPassword'
        component={ForgetPasswordScreen}
        options={{
          headerTransparent: true,
          headerTitle: undefined,
          title: '',
          headerTintColor: 'white',
        }}
      />
    </>,
  ];
}

export type AuthenticationStackParamList = {
  Onboarding: undefined;
  Login: Object | undefined;
  Register: Object | undefined;
  ForgetPassword: Object | undefined;
};
