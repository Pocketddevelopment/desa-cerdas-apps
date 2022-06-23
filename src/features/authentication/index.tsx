import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import OnboardingScreen from './screens/Onboarding';
import ForgetPasswordScreen from './screens/ForgetPassword';
import RegisterScreen from './screens/Register';
import Storage from '@utils/async-storage';

const Stack = createNativeStackNavigator();

export default function AuthenticationStack() {
  function getInitialRouteName(): string {
    const shouldOnboardLocal = Storage.getItem('shouldOnboard', true);
    if (shouldOnboardLocal) {
      return 'Onboarding';
    }
    return 'Login';
  }
  return (
    <Stack.Navigator initialRouteName={getInitialRouteName()}>
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
    </Stack.Navigator>
  );
}

export type AuthenticationStackParamList = {
  Onboarding: undefined;
  Login: Object | undefined;
  Register: Object | undefined;
  ForgetPassword: Object | undefined;
};
