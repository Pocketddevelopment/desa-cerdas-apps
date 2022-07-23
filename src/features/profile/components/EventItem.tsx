import Row from '@components/Row';
import { Caption, Title, Text } from '@components/typography';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import RenderHTML from 'react-native-render-html';

type EventItemProps = {
  id: string;
  thumbnailUri: string;
  date: string;
  title: string;
  description: string;
};

const EventItem = ({
  id,
  thumbnailUri,
  date,
  title,
  description,
}: EventItemProps) => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  return (
    <TouchableOpacity
      delayPressIn={80}
      onPress={() =>
        navigation.navigate('NewsDetail', {
          id: id,
          title: title,
          type: 'event',
        })
      }>
      <Row style={styles.container}>
        <Image
          source={{
            uri: thumbnailUri,
          }}
          style={styles.image}
        />
        <View style={{ flex: 1 }}>
          <Caption>{date}</Caption>
          <Title numberOfLines={1} size={16} color={theme.colors.primary}>
            {title}
          </Title>
          <RenderHTML
            source={{ html: description }}
            baseStyle={styles.htmlText}
            defaultTextProps={{
              numberOfLines: 2,
              style: [styles.defaultText, { color: theme.colors.text }],
            }}
            contentWidth={DeviceContants.screenWidth}
          />
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
    resizeMode: 'cover',
    marginRight: 10,
  },
  defaultText: {
    fontSize: 14,
  },
  htmlText: {
    maxHeight: 28,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 13,
    lineHeight: 28,
    textAlign: 'left',
  },
});
