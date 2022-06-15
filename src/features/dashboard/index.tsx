import AttractionScreen from '@attraction/screens/Attraction';
import AttractionDetailScreen from '@attraction/screens/AttractionDetail';
import AttractionListScreen from '@attraction/screens/AttractionList';
import SMEScreen from '@attraction/screens/SME';
import SMEDetailScreen from '@attraction/screens/SMEDetail';
import ImagePreviewModal from '@components/ImagePreview';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComplaintScreen from '@service/screens/Complaint';
import ComplaintDetail from '@service/screens/ComplaintDetail';
import ComplaintFormScreen from '@service/screens/ComplaintForm';
import DocumentHistoryScreen from '@service/screens/DocumentHistory';
import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import NewsDetailScreen from '../news/screens/NewsDetail';
import NotificationListScreen from '../notification/screens/NotificationList';
import ProfileScreen from '../profile/screens/Profile';
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
    const theme = useTheme();
    const [focused, setFocused] = useState<number>(0);
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name='Beranda'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <Image
                  source={require('@assets/navigation/home-inactive.webp')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: color,
                    marginHorizontal: 10,
                    alignSelf: 'center',
                  }}
                />
              );
            },
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarLabelPosition: 'beside-icon',
          }}
        />
        <Tab.Screen
          name='Akun'
          component={AccountScreen}
          options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <Image
                  source={require('@assets/navigation/account-inactive.webp')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: color,
                    marginHorizontal: 10,
                    alignSelf: 'center',
                  }}
                />
              );
            },
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarLabelPosition: 'beside-icon',
          }}
        />
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
          title: 'Keluhan Warga',
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
      <Stack.Screen name='SMEDetail' component={SMEDetailScreen} />
      <Stack.Screen
        name='Attraction'
        component={AttractionScreen}
        options={{
          title: 'Wisata Desa',
        }}
      />
      <Stack.Screen name='AttractionList' component={AttractionListScreen} />
      <Stack.Screen
        name='AttractionDetail'
        component={AttractionDetailScreen}
      />
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'Profil Desa',
        }}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          headerShown: false,
          contentStyle: {
            backgroundColor: 'rgba(0,0,0,.6)',
          },
        }}>
        <Stack.Screen
          name='ImagePreview'
          component={ImagePreviewModal}
          options={{}}
        />
      </Stack.Group>
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
  SMEDetail: Object | undefined;
  Attraction: Object | undefined;
  AttractionList: Object | undefined;
  AttractionDetail: Object | undefined;
  Profile: Object | undefined;

  ImagePreview: Object | undefined;
};
