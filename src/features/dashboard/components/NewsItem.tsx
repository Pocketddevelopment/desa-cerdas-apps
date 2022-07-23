import Row from '@components/Row';
import { Caption, Title, Text } from '@components/typography';
import DeviceContants from '@constants/device';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import RenderHTML from 'react-native-render-html';
import { DashboardStackParamList } from '..';

type NewsItemProps = {
  id: string;
  thumbnailUri: string;
  date: string;
  title: string;
  description: string;
};

const NewsItem = ({
  id,
  thumbnailUri,
  date,
  title,
  description,
}: NewsItemProps) => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPress = () => {
    navigation.navigate('NewsDetail', {
      id: id,
      title: title,
      type: 'news',
    });
  };

  return (
    <TouchableOpacity delayPressIn={80} onPress={onPress}>
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
            contentWidth={DeviceContants.screenWidth}
          />
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default NewsItem;

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
  htmlText: {
    maxHeight: 32,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 13,
    lineHeight: 30,
    textAlign: 'left',
  },
});
