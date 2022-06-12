import Row from '@components/Row';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Caption, Text, Title, useTheme } from 'react-native-paper';
import { DashboardStackParamList } from '@dashboard/index';
import SpaceBetween from '@components/SpaceBetween';

type ComplaintItemProps = {
  date: string;
  thumbnailUri: string;
  title: string;
  description: string;
  count: number;
};

const ComplaintItem = ({
  date,
  thumbnailUri,
  title,
  description,
  count,
}: ComplaintItemProps) => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ComplaintDetail')}>
      <Row style={styles.container}>
        <Image
          source={{
            uri: thumbnailUri,
          }}
          style={styles.image}
        />
        <View style={{ flex: 1 }}>
          <SpaceBetween>
            <Caption>{date}</Caption>
            <Caption style={{ color: theme.colors.primary }}>
              ({count} respon)
            </Caption>
          </SpaceBetween>
          <Title
            numberOfLines={1}
            style={[styles.title, { color: theme.colors.primary }]}>
            {title}
          </Title>
          <Text numberOfLines={1}>{description}</Text>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default ComplaintItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    lineHeight: undefined,
    fontSize: 16,
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'contain',
  },
});
