import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import OnboardingScreen from './screens/Onboarding';
import ForgetPasswordScreen from './screens/ForgetPassword';
import RegisterScreen from './screens/Register';

const Stack = createNativeStackNavigator();

export default function AuthenticationStack() {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
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
        }}
      />
    </Stack.Navigator>
  );
}

export type AuthenticationStackParamList = {
  Onboarding: undefined;
  Login: Object | undefined;
  Register: Object | undefined;
  ForgetPassword: Object | undefined;
};
