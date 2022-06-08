import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import OnboardingScreen from './screens/Onboarding';
import ForgetPasswordScreen from './screens/ForgetPassword';

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
  ForgetPassword: Object | undefined;
};
