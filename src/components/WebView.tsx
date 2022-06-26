import { DashboardStackParamList } from '@dashboard/index';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import RNWebView from 'react-native-webview';

type WebViewProps = {
  navigation: NativeStackNavigationProp<DashboardStackParamList, any>;
  route: RouteProp<any>;
};

const WebView: React.FC<WebViewProps> = ({ navigation, route }) => {
  const title = route.params?.title;
  const uri = route.params?.uri;

  useEffect(() => {
    navigation.setOptions({
      title: title ? title : '',
    });
  }, [navigation, title]);

  return (
    <RNWebView
      startInLoadingState={true}
      renderLoading={() => <ActivityIndicator size={'large'} />}
      source={{ uri: uri || 'https://policies.google.com/terms?hl=en-US' }}
    />
  );
};

export default WebView;
