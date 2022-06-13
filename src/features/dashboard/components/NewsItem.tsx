import Row from '@components/Row';
import { Caption, Title, Text } from '@components/typography';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { DashboardStackParamList } from '..';

const NewsItem = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('NewsDetail')}>
      <Row style={styles.container}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
          }}
          style={styles.image}
        />
        <View style={{ flex: 1 }}>
          <Caption>Selasa, 12 Maret 2022</Caption>
          <Title numberOfLines={1} color={theme.colors.primary}>
            Himbauan vaksinasi booster dalam
          </Title>
          <Text>Perjuangan pemutusan rantai penularan C...</Text>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 10,
  },
});
