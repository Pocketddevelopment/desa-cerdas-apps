import Dot from '@components/pagination/PaginationDot';
import { Caption, Text, Title } from '@components/typography';
import DeviceContants from '@constants/device';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const data: string[] = [
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
];

const NewsDetailScreen: React.FC = () => {
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
        data={data}
        renderItem={renderCarouselItem}
        layoutCardOffset={9}
        sliderWidth={DeviceContants.screenWidth}
        itemWidth={DeviceContants.screenWidth}
        snapToAlignment={'center'}
      />
      <View style={styles.contentContainer}>
        <Caption>Selasa, 12 Maret 2022</Caption>
        <Title
          style={{ marginVertical: 10 }}
          size={20}
          color={theme.colors.primary}>
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
    padding: 20,
  },
  pagination: {
    position: 'absolute',
    bottom: -15,
  },
  image: {
    flex: 1,
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    resizeMode: 'cover',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
