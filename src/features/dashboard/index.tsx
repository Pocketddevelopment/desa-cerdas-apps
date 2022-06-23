import AttractionScreen from '@attraction/screens/Attraction';
import AttractionDetailScreen from '@attraction/screens/AttractionDetail';
import MoreListScreen from '@attraction/screens/MoreList';
import SMEScreen from '@attraction/screens/SME';
import SMEDetailScreen from '@attraction/screens/SMEDetail';
import ImagePreviewModal from '@components/ImagePreview';
import NavigationTabItem from '@components/NavigationTabItem';
import WebView from '@components/WebView';
import DeviceContants from '@constants/device';
import DistrictHighlightScreen from '@profile/screens/DistrictHighlight';
import EventListScreen from '@profile/screens/EventList';
import PlacemanListScreen from '@profile/screens/PlacemanList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComplaintScreen from '@service/screens/Complaint';
import ComplaintDetail from '@service/screens/ComplaintDetail';
import ComplaintFormScreen from '@service/screens/ComplaintForm';
import DocumentHistoryScreen from '@service/screens/DocumentHistory';
import React from 'react';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import NewsDetailScreen from '../news/screens/NewsDetail';
import NotificationListScreen from '../notification/screens/NotificationList';
import ProfileScreen from '../profile/screens/Profile';
import ReportListScreen from '../report/screens/ReportList';
import DocumentFormScreen from '../service/screens/DocumentForm';
import ServiceScreen from '../service/screens/ServiceHome';
import AccountScreen from './screens/Account';
import PrivacyPolicyScreen from './screens/account/PrivacyPolicy';
import TermsConditionScreen from './screens/account/TermsCondition';
import UpdateAccountScreen from './screens/account/UpdateAccount';
import UpdatePasswordScreen from './screens/account/UpdatePassword';
import HomeScreen from './screens/Home';

const Stack = createNativeStackNavigator<DashboardStackParamList>();
const Tab = createBottomTabNavigator();

const TabBar = ({ state, descriptors, navigation, colors }: any) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const getIcon = (label: string): ImageSourcePropType => {
          switch (label) {
            case 'Beranda':
              return require('@assets/navigation/home.webp');
            case 'Beranda':
              return require('@assets/navigation/account.webp');
            default:
              return require('@assets/navigation/account.webp');
          }
        };

        return (
          <NavigationTabItem
            label={label}
            isActive={isFocused}
            onPress={onPress}
            icon={getIcon(label)}
            color={colors.primary}
            inactiveColor={colors.caption}
          />
        );
      })}
    </View>
  );
};

export default function DashboardStack() {
  function Dashboard() {
    const theme = useTheme();
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <TabBar {...props} colors={theme.colors} />}>
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
        name='TermsCondition'
        component={TermsConditionScreen}
        options={{
          title: 'Syarat dan Ketentuan',
        }}
      />
      <Stack.Screen
        name='PrivacyPolicy'
        component={PrivacyPolicyScreen}
        options={{
          title: 'Kebijakan Privasi',
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
      <Stack.Screen name='MoreList' component={MoreListScreen} />
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
      <Stack.Screen
        name='PlacemanList'
        component={PlacemanListScreen}
        options={{
          title: 'Struktur Pemerintahan',
        }}
      />
      <Stack.Screen
        name='DistrictHighlight'
        component={DistrictHighlightScreen}
        options={{
          title: 'Badan Usaha Milik Desa',
        }}
      />
      <Stack.Screen
        name='EventList'
        component={EventListScreen}
        options={{
          title: 'Event Kegiatan BUM Des',
        }}
      />
      <Stack.Screen name='WebView' component={WebView} />
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
  MoreList: Object | undefined;
  AttractionDetail: Object | undefined;
  Profile: Object | undefined;
  PlacemanList: Object | undefined;
  DistrictHighlight: Object | undefined;
  EventList: Object | undefined;
  TermsCondition: Object | undefined;
  PrivacyPolicy: Object | undefined;
  WebView: Object | undefined;
  ImagePreview: Object | undefined;
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: DeviceContants.screenWidth,
    backgroundColor: '#F5F5F5',
  },
});
