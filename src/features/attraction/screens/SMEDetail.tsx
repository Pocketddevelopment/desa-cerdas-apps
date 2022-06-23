import Button from '@components/Button';
import Dot from '@components/pagination/PaginationDot';
import { Text, Title } from '@components/typography';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Share from 'react-native-share';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const data: string[] = [
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
];

type SMEDetailProps = {
  navigation: NativeStackNavigationProp<DashboardStackParamList, any>;
  route: RouteProp<any>;
};

const SMEDetailScreen: React.FC<SMEDetailProps> = ({ navigation, route }) => {
  const { thumbnailUri, name, description, seller, phone } = route.params?.data;
  const theme = useTheme();

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    navigation.setOptions({
      title: name || '',
    });
  }, [navigation]);

  const onSnapItem = (index: number) => {
    setActiveIndex(index);
  };

  const onPressChat = async () => {
    const shareOptions = {
      title: `Hubungi ${name} melalui Whatsapp`,
      message: `Halo ${name}`,
      social: Share.Social.WHATSAPP,
      whatsAppNumber: phone,
    };
    try {
      await Share.shareSingle(shareOptions);
    } catch (err) {
      console.log('Anda tidak memilki aplikasi Whatsapp yang terpasang');
    }
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
        data={[thumbnailUri]}
        onSnapToItem={onSnapItem}
        renderItem={renderCarouselItem}
        sliderWidth={DeviceContants.screenWidth}
        itemWidth={DeviceContants.screenWidth}
        snapToAlignment={'center'}
      />
      <View style={styles.contentContainer}>
        <Button mode='outlined' primary onPress={onPressChat}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png',
            }}
            style={styles.icon}
          />{' '}
          Hubungi via Whatsapp
        </Button>
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <Title size={14} style={styles.title}>
              Deskripsi
            </Title>
            <Text size={16}>{description}</Text>
          </View>
          <View style={styles.section}>
            <Title size={14} style={styles.title}>
              Info Penjual
            </Title>
            <Text size={16}>
              {seller}
              {'\n'}
              {phone}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SMEDetailScreen;

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
  carouselContainer: {
    height: 250,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    resizeMode: 'cover',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginVertical: 5,
  },
  section: {
    marginVertical: 10,
  },
  title: {
    marginBottom: 8,
  },
});
