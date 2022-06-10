import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import AccountScreen from './screens/Account';
import NewsDetailScreen from '../news/screens/NewsDetail';
import NotificationListScreen from '../notification/screens/NotificationList';
import UpdateAccountScreen from './screens/account/UpdateAccount';
import UpdatePasswordScreen from './screens/account/UpdatePassword';

const Stack = createNativeStackNavigator<DashboardStackParamList>();
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
      <Stack.Screen
        name='NotificationList'
        component={NotificationListScreen}
        options={{
          title: 'Notifikasi',
        }}
      />
      <Stack.Screen
        name='UpdateAccount'
        component={UpdateAccountScreen}
        options={{
          title: 'Perbarui Akun',
        }}
      />
      <Stack.Screen
        name='UpdatePassword'
        component={UpdatePasswordScreen}
        options={{
          title: 'Ganti Kata Sandi',
        }}
      />
    </Stack.Navigator>
  );
}

export type DashboardStackParamList = {
  Onboarding: undefined;
  Dashboard: undefined;
  Login: Object | undefined;
  Register: Object | undefined;
  ForgetPassword: Object | undefined;
  NewsDetail: Object | undefined;
  NotificationList: Object | undefined;
  UpdateAccount: Object | undefined;
  UpdatePassword: Object | undefined;
};
