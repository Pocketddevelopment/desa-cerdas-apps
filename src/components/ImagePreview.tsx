import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, View } from 'react-native';
import { IconButton } from 'react-native-paper';

type ImagePreviewProps = {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any>;
};

const ImagePreviewModal = ({ navigation, route }: ImagePreviewProps) => {
  const uri = route.params?.uri;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <IconButton
        icon='close-circle'
        size={42}
        color={'white'}
        style={{ position: 'absolute', top: 0, right: 0 }}
        onPress={() => navigation.goBack()}
      />
      <Image
        source={{ uri: uri }}
        style={{
          width: '100%',
          resizeMode: 'contain',
          aspectRatio: 1,
        }}
      />
    </View>
  );
};

export default ImagePreviewModal;
