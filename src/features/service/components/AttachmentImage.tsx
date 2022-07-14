import onPressInterface from '@interfaces/Press.interface';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';

type AttachmentImageProps = {
  type: string;
  data: string;
  onPressRemove: onPressInterface;
};

export default function AttachmentImage({
  type,
  data,
  onPressRemove,
}: AttachmentImageProps) {
  const theme = useTheme();
  return (
    <View>
      <Image
        source={{
          uri: `data:${type};base64,${data}`,
        }}
        style={styles.attachmentThumbnail}
      />
      <IconButton
        size={18}
        icon={'close-circle'}
        color={theme.colors.primary}
        style={styles.btnAttachmentCancel}
        onPress={onPressRemove}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  attachmentThumbnail: {
    height: 70,
    width: 70,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  btnAttachmentCancel: {
    position: 'absolute',
    top: -4,
    right: 2,
    zIndex: 1,
  },
});
