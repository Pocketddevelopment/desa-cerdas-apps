import SMEScreen from '@attraction/screens/SME';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComplaintScreen from '@service/screens/Complaint';
import ComplaintDetail from '@service/screens/ComplaintDetail';
import ComplaintFormScreen from '@service/screens/ComplaintForm';
import DocumentHistoryScreen from '@service/screens/DocumentHistory';
import React from 'react';
import NewsDetailScreen from '../news/screens/NewsDetail';
import NotificationListScreen from '../notification/screens/NotificationList';
import ReportListScreen from '../report/screens/ReportList';
import DocumentFormScreen from '../service/screens/DocumentForm';
import ServiceScreen from '../service/screens/ServiceHome';
import AccountScreen from './screens/Account';
import UpdateAccountScreen from './screens/account/UpdateAccount';
import UpdatePasswordScreen from './screens/account/UpdatePassword';
import HomeScreen from './screens/Home';

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
      <Stack.Screen
        name='Report'
        component={ReportListScreen}
        options={{
          title: 'Unduh Laporan',
        }}
      />
      <Stack.Screen
        name='Service'
        component={ServiceScreen}
        options={{
          title: 'Layanan',
        }}
      />
      <Stack.Screen
        name='DocumentForm'
        component={DocumentFormScreen}
        options={{
          title: 'Permohonan Surat / Dokumen',
        }}
      />
      <Stack.Screen
        name='Complaint'
        component={ComplaintScreen}
        options={{
          title: 'Permohonan Surat / Dokumen',
        }}
      />
      <Stack.Screen
        name='ComplaintForm'
        component={ComplaintFormScreen}
        options={{
          title: 'Buat Keluhan Baru',
        }}
      />
      <Stack.Screen
        name='DocumentHistory'
        component={DocumentHistoryScreen}
        options={{
          title: 'Riwayat Surat / Dokumen',
        }}
      />
      <Stack.Screen name='ComplaintDetail' component={ComplaintDetail} />
      <Stack.Screen
        name='SME'
        component={SMEScreen}
        options={{
          title: 'UMKM',
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
  Report: Object | undefined;
  Service: Object | undefined;
  DocumentForm: Object | undefined;
  DocumentHistory: Object | undefined;
  Complaint: Object | undefined;
  ComplaintForm: Object | undefined;
  ComplaintDetail: Object | undefined;
  SME: Object | undefined;
};
