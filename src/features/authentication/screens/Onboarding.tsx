import Dot from '@authentication/components/PaginationDot';
import Button from '@components/Button';
import { Text } from '@components/typography';
import DeviceContants from '@constants/device';
import StoreConstants from '@constants/store';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Storage from '@utils/async-storage';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const background = [
  require('@assets/onboarding/bg-1.png'),
  require('@assets/onboarding/bg-2.png'),
  require('@assets/onboarding/bg-3.png'),
  require('@assets/onboarding/bg-4.png'),
];

const data = [
  {
    img: require('@assets/logo-desa.png'),
    text: '<Tagline>',
  },
  {
    img: require('@assets/onboarding/slide-1.webp'),
    text: 'Cari tahu semua tentang desa Anda termasuk berita, statistik, wisata, dan lainnya',
  },
  {
    img: require('@assets/onboarding/slide-2.webp'),
    text: 'Pantau perkembangan administrasi desa, progress laporan keluhan warga, serta UMKM di sekitar Anda',
  },
  {
    img: require('@assets/onboarding/slide-3.webp'),
    text: 'Urus dokumen dan surat - menyurat cepat dan praktis, tanpa harus keluar dari rumah',
  },
];

export const SLIDER_WIDTH = Dimensions.get('window').width;

const OnboardingScreen: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const carouselRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onPressNextButton = () => {
    if (carouselRef) {
      carouselRef.current?.snapToNext();
      if (activeIndex === data.length - 1) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        );
        Storage.setItem(StoreConstants.ONBOARDING, false);
      }
    }
  };

  const renderCarouselItem = ({ item, index }: any) => {
    return (
      <ImageBackground
        style={styles.background}
        resizeMode={'stretch'}
        source={background[index]}>
        <View style={styles.itemContainer} key={index}>
          <Image source={item.img} style={styles.image} />
          <Pagination
            activeDotIndex={activeIndex}
            dotsLength={data.length}
            containerStyle={styles.pagination}
            dotStyle={{ margin: 0 }}
            dotElement={<Dot isActive={index === activeIndex} />}
            inactiveDotScale={1.5}
            inactiveDotOpacity={1}
            dotColor={'transparent'}
            inactiveDotColor={'white'}
          />
          <View style={styles.textContainer}>
            <Text
              style={styles.onboardingDescription}
              size={18}
              color={'white'}>
              {item.text}
            </Text>
          </View>
          <Button onPress={onPressNextButton} btnStyle={styles.btnNext}>
            {activeIndex === data.length - 1 ? 'Mulai' : 'Lanjut'}
          </Button>
        </View>
      </ImageBackground>
    );
  };

  const onSnapItem = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <Carousel
        ref={carouselRef}
        layout='default'
        initialScrollIndex={activeIndex}
        data={data}
        onSnapToItem={onSnapItem}
        renderItem={renderCarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH}
        snapToStart
        enableSnap
        scrollEnabled={false}
        enableMomentum
        lockScrollWhileSnapping
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        contentContainerCustomStyle={{ paddingTop: SLIDER_WIDTH / 5 }}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 50,
  },
  pagination: {
    marginTop: 10,
  },
  paginationDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 0,
    borderColor: 'white',
  },
  paginationActiveDot: {
    backgroundColor: 'white',
  },
  textContainer: {
    height: 100,
    alignItems: 'flex-start',
  },
  onboardingDescription: {
    textAlign: 'center',
  },
  btnNext: {
    marginTop: 30,
    width: '40%',
  },
  image: {
    width: 250,
    height: 250,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',
    width: DeviceContants.screenWidth,
  },
});
