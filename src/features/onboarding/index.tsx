import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from './screens/Onboarding'

const Stack = createNativeStackNavigator()

export default function OnboardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Home' component={OnboardingScreen} />
    </Stack.Navigator>
  )
}
