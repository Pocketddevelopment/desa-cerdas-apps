import Row from '@components/Row';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Caption, Text, Title } from 'react-native-paper';

const NewsItem = () => {
  return (
    <Row style={styles.container}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
        }}
        style={styles.image}
      />
      <View style={{ flex: 1 }}>
        <Caption>Selasa, 12 Maret 2022</Caption>
        <Title numberOfLines={1}>Himbauan vaksinasi booster dalam</Title>
        <Text>Perjuangan pemutusan rantai penularan C...</Text>
      </View>
    </Row>
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
