import Row from '@components/Row';
import { Title } from '@components/typography';
import DeviceContants from '@constants/device';
import onPressInterface from '@interfaces/Press.interface';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import RenderHTML from 'react-native-render-html';

type AttractionItemProps = {
  thumbnailUri: string;
  title: string;
  description: string;
  onPress: onPressInterface;
};

const AttractionItem = React.memo(function AttractionItem({
  thumbnailUri,
  title,
  description,
  onPress,
}: AttractionItemProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      delayPressIn={80}
      style={styles.container}
      onPress={onPress}>
      <Row align='top'>
        <Image
          style={styles.image}
          source={{
            uri: thumbnailUri,
          }}
        />
        <View style={{ flex: 1 }}>
          <Title numberOfLines={1} color={theme.colors.primary}>
            {title}
          </Title>
          <RenderHTML
            source={{ html: description }}
            baseStyle={{ maxHeight: 38 }}
            contentWidth={DeviceContants.screenWidth}
          />
        </View>
      </Row>
    </TouchableOpacity>
  );
});

export default AttractionItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
