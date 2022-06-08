import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import OnboardingScreen from './screens/Onboarding';

const Stack = createNativeStackNavigator();

export default function AuthenticationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Login'}>
      <Stack.Screen name='Onboarding' component={OnboardingScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
}
