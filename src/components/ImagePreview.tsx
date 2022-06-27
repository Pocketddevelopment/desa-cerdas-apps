import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { ActivityIndicator, IconButton, useTheme } from 'react-native-paper';

type ImagePreviewProps = {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any>;
};

const ImagePreviewModal = ({ navigation, route }: ImagePreviewProps) => {
  const uri = route.params?.uri;
  const theme = useTheme();
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <IconButton
        icon='close-circle'
        size={42}
        color={'white'}
        style={{ position: 'absolute', top: 0, right: 0 }}
        onPress={() => navigation.goBack()}
      />
      {loading && (
        <ActivityIndicator size={'large'} color={theme.colors.primary} />
      )}
      <Image
        source={{ uri: uri }}
        style={{
          width: '100%',
          resizeMode: 'contain',
          aspectRatio: 1,
        }}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

export default ImagePreviewModal;
