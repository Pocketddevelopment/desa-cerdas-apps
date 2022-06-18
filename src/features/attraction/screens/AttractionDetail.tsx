import Button from '@components/Button';
import Dot from '@components/pagination/PaginationDot';
import { Text } from '@components/typography';
import DeviceContants from '@constants/device';
import React, { useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const data: string[] = [
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
];

const AttractionDetailScreen: React.FC = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onSnapItem = (index: number) => {
    setActiveIndex(index);
  };
  const renderCarouselItem = ({ item, index }: any) => {
    return (
      <>
        <Image source={{ uri: item }} style={styles.image} />
        <Pagination
          activeDotIndex={activeIndex}
          dotsLength={data.length}
          dotStyle={{ margin: 0 }}
          containerStyle={[
            styles.pagination,
            { left: DeviceContants.screenWidth / 2 - data.length * 16 },
          ]}
          dotElement={<Dot color={theme.colors.primary} />}
          inactiveDotScale={1.5}
          inactiveDotOpacity={1}
          dotColor={'white'}
          inactiveDotColor={'white'}
        />
      </>
    );
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.bodyContainer}>
      <Carousel
        layout='default'
        initialScrollIndex={activeIndex}
        data={data}
        onSnapToItem={onSnapItem}
        renderItem={renderCarouselItem}
        sliderWidth={DeviceContants.screenWidth}
        itemWidth={DeviceContants.screenWidth}
        snapToAlignment={'center'}
      />
      <View style={styles.contentContainer}>
        <Button
          mode='outlined'
          primary
          style={{ height: 50 }}
          onPress={() => {}}>
          <Image
            source={{
              uri: 'https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png',
            }}
            style={styles.icon}
          />{' '}
          Lihat Lokasi di Google Maps
        </Button>
        <View style={styles.section}>
          <Text size={16}>
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
    position: 'absolute',
    bottom: -15,
  },
  icon: {
    height: 20,
    width: 20,
  },
  image: {
    flex: 1,
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    marginVertical: 10,
  },
});
