import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption, Text, Title } from 'react-native-paper';

interface NotificationItemProps {
  date: string;
  title: string;
  description: string;
  read?: boolean;
}

const NotificationItem = ({
  date,
  title,
  description,
  read = true,
}: NotificationItemProps) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: read ? 'white' : '#FFEBEB' },
      ]}>
      <Caption>{date}</Caption>
      <Title
        style={[styles.title, { fontWeight: read ? 'normal' : 'bold' }]}
        numberOfLines={1}>
        {title}
      </Title>
      <Text numberOfLines={1}>{description}</Text>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: '#D0342C',
    fontSize: 18,
  },
});
