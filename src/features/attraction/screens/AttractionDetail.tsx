import Button from '@components/Button';
import DeviceContants from '@constants/device';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Text, Title } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

const data: string[] = [
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
];

const AttractionDetailScreen: React.FC = () => {
  const renderCarouselItem = ({ item, index }: any) => {
    return <Image source={{ uri: item }} style={styles.image} />;
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
        contentContainerStyle={{ flexGrow: 0 }}
        snapToAlignment={'center'}
      />
      <View style={styles.contentContainer}>
        <Button mode='outlined' primary>
          <Image
            source={{
              uri: 'https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png',
            }}
            style={styles.icon}
          />{' '}
          Lihat Lokasi di Google Maps
        </Button>
        <View style={styles.section}>
          <Title style={styles.title}>Deskripsi</Title>
          <Text>
            Tempat wisata alam yang tidak kalah dari tempat di pulau lainnya,
            yaitu wisata air terjun plered. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AttractionDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
    flex: 1,
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
  icon: {
    height: 20,
    width: 20,
  },
  image: {
    flex: 1,
    height: 200,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    marginVertical: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: undefined,
  },
});
