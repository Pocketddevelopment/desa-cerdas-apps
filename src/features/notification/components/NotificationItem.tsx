import { Caption, Text } from '@components/typography';
import Title from '@components/typography/Text';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

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
  const theme = useTheme();
  return (
    <View
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
    </View>
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
