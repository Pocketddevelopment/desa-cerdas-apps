import Button from '@components/Button';
import { Caption, Text, Title } from '@components/typography';
import { DashboardStackParamList } from '@dashboard/index';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

export type NotificationDetailScreenProps = {
  id: string;
  title: string;
  date: string;
  description: string;
};

const NotificationDetailScreen: React.FC<
  NativeStackScreenProps<DashboardStackParamList, 'NotificationDetail'>
> = ({ navigation, route }) => {
  const { id, title: placeholderTitle, date, description } = route.params;
  const theme = useTheme();

  useEffect(() => {
    navigation.setOptions({
      title: placeholderTitle,
    });
  }, [navigation, placeholderTitle]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <Caption>{date}</Caption>
        <Title
          style={{ marginVertical: 10 }}
          size={20}
          color={theme.colors.primary}>
          {placeholderTitle}
        </Title>
        <Text>{description}</Text>
      </ScrollView>
      <Button mode='outlined' primary>
        Lihat Halaman Terkait
      </Button>
    </View>
  );
};

export default NotificationDetailScreen;

const styles = StyleSheet.create({
  loading: {
    marginVertical: 50,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  scroll: {
    flex: 1,
  },
});
