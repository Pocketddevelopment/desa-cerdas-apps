import DeviceContants from '@constants/device';
import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Caption, Text, Title } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const data: string[] = [
  'https://static.vecteezy.com/system/resources/previews/003/355/926/non_2x/business-banner-design-with-blue-wave-background-free-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/003/355/926/non_2x/business-banner-design-with-blue-wave-background-free-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/003/355/926/non_2x/business-banner-design-with-blue-wave-background-free-vector.jpg',
];

const NewsDetailScreen: React.FC = () => {
  const renderCarouselItem = ({ item, index }: any) => {
    return (
      <View key={index}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.bodyContainer}>
      <Carousel
        layout='default'
        data={data}
        renderItem={renderCarouselItem}
        layoutCardOffset={9}
        sliderWidth={DeviceContants.screenWidth}
        itemWidth={DeviceContants.screenWidth}
        snapToAlignment={'center'}
      />
      <View style={styles.contentContainer}>
        <Caption>Selasa, 12 Maret 2022</Caption>
        <Title style={{ marginBottom: 20 }}>
          Himbauan vaksinasi booster dalam rangka mempercepat ketahanan Covid19
          nasional
        </Title>
        <Text>
          Perjuangan pemutusan rantai penularan Covid19 di Indonesia belumlah
          selesai. Oleh karena itu, lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  pagination: {
    marginTop: 10,
  },
  paginationDot: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    opacity: 1,
    width: 20,
    height: 20,
  },
  image: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
