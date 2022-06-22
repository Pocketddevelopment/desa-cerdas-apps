import Row from '@components/Row';
import { Caption, Title, Text } from '@components/typography';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const EventItem = () => {
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
          <Title numberOfLines={1} size={16} color={theme.colors.primary}>
            Himbauan vaksinasi booster dalam
          </Title>
          <Text numberOfLines={1}>
            Perjuangan pemutusan rantai penularan C...
          </Text>
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
    resizeMode: 'contain',
    marginRight: 10,
  },
});
