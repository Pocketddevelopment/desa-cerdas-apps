import { Caption, Text } from '@components/typography';
import Title from '@components/typography/Text';
import { DashboardStackParamList } from '@dashboard/index';
import { readNotificationThunk } from '@notification/models/thunks';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useAppDispatch } from '@store/hooks';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';

interface NotificationItemProps {
  id: string;
  date: string;
  title: string;
  description: string;
  read?: boolean;
}

const NotificationItem = ({
  id,
  date,
  title,
  description,
  read = true,
}: NotificationItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const onPress = () => {
    dispatch(readNotificationThunk(id));
    dispatch({
      type: 'misc/readNotification',
      payload: id,
    });
    navigation.navigate('NotificationDetail', {
      id,
      title,
      date: date,
      description,
    });
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: read ? 'white' : '#FFEBEB' },
      ]}>
      <Caption style={styles.date}>{date}</Caption>
      <Title
        thickness={read ? 'normal' : 'bold'}
        color={theme.colors.primary}
        numberOfLines={1}
        size={16}>
        {title}
      </Title>
      <Text numberOfLines={1}>{description}</Text>
    </TouchableOpacity>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  date: {
    marginBottom: 7,
  },
});
