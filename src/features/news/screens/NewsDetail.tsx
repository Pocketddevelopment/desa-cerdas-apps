import Dot from '@components/pagination/PaginationDot';
import { Caption, Text, Title } from '@components/typography';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const data: string[] = [
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
];

type NewsDetailProps = {
  navigation: NativeStackNavigationProp<DashboardStackParamList, any>;
  route: RouteProp<any>;
};

const NewsDetailScreen: React.FC<NewsDetailProps> = ({ navigation, route }) => {
  const image = route.params?.image;
  const title = route.params?.title;
  const date = route.params?.date;
  const description = route.params?.description;

  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    navigation.setOptions({
      title: title || '',
    });
  }, [navigation, title]);

  const onSnapItem = (index: number) => {
    setActiveIndex(index);
  };

  const renderCarouselItem = ({ item, index }: any) => {
    return (
      <View style={styles.carouselContainer}>
        <Image source={{ uri: item }} style={styles.image} />
        <Pagination
          activeDotIndex={activeIndex}
          dotsLength={1}
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
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <Carousel
        layout='default'
        initialScrollIndex={activeIndex}
        data={[image]}
        onSnapToItem={onSnapItem}
        renderItem={renderCarouselItem}
        sliderWidth={DeviceContants.screenWidth}
        itemWidth={DeviceContants.screenWidth}
        snapToAlignment={'center'}
      />
      <View style={styles.contentContainer}>
        <Caption>{date}</Caption>
        <Title
          style={{ marginVertical: 10 }}
          size={20}
          color={theme.colors.primary}>
          {title}
        </Title>
        <Text>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  pagination: {
    position: 'absolute',
    bottom: -15,
  },
  carouselContainer: {
    height: 250,
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
