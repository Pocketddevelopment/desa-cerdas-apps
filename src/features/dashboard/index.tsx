import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import AccountScreen from './screens/Account';
import NewsDetailScreen from '../news/screens/NewsDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function DashboardStack() {
  function Dashboard() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name='Beranda' component={HomeScreen} />
        <Tab.Screen name='Akun' component={AccountScreen} />
      </Tab.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Dashboard'
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='NewsDetail'
        component={NewsDetailScreen}
        options={{
          title: 'Berita',
        }}
      />
    </Stack.Navigator>
  );
}

export type DashboardStackParamList = {
  Onboarding: undefined;
  Login: Object | undefined;
  Register: Object | undefined;
  ForgetPassword: Object | undefined;
  NewsDetail: Object | undefined;
};
