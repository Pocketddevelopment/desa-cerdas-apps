import Row from '@components/Row';
import { Caption, Title, Text } from '@components/typography';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';

type EventItemProps = {
  thumbnailUri: string;
  date: string;
  title: string;
  description: string;
};

const EventItem = ({
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
          image: thumbnailUri,
          date: date,
          title: title,
          description: description,
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
          <Text numberOfLines={1}>{description}</Text>
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
});
