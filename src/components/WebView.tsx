import React from 'react';
import RNWebView from 'react-native-webview';

const WebView = () => {
  return (
    <RNWebView source={{ uri: 'https://policies.google.com/terms?hl=en-US' }} />
  );
};

export default WebView;
