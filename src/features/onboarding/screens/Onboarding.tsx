import React, { useRef, useState } from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Button, Text } from 'react-native-paper'

const data = [
  {
    img: require('assets/onboarding-1.webp'),
    text: 'Cari tahu semua tentang desa Anda termasuk berita, statistik, wisata, dan lainnya',
  },
  {
    img: require('assets/onboarding-2.webp'),
    text: 'Cari tahu semua tentang desa Anda termasuk berita, statistik, wisata, dan lainnya',
  },
  {
    img: require('assets/onboarding-3.webp'),
    text: 'Cari tahu semua tentang desa Anda termasuk berita, statistik, wisata, dan lainnya',
  },
]

export const SLIDER_WIDTH = Dimensions.get('window').width

const OnboardingScreen: React.FC = () => {
  const carouselRef = useRef<any>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const onPressNextButton = () => {
    if (carouselRef) {
      carouselRef.current?.snapToNext()
    }
  }

  const renderCarouselItem = ({ item, index }: any) => {
    return (
      <View style={styles.itemContainer} key={index}>
        <Image source={item.img} style={styles.image} />
        <Pagination
          activeDotIndex={activeIndex}
          dotsLength={data.length}
          containerStyle={styles.pagination}
          dotStyle={styles.paginationDot}
          dotColor={'transparent'}
          inactiveDotColor={'white'}
        />
        <Text style={styles.onboadingDescription}>{item.text}</Text>
        <Button onPress={onPressNextButton} style={styles.btnNext}>
          {activeIndex === data.length - 1 ? 'Mulai' : 'Lanjut'}
        </Button>
      </View>
    )
  }

  const onSnapItem = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('assets/onboarding-background.webp')} />
      <Carousel
        ref={carouselRef}
        layout='default'
        initialScrollIndex={activeIndex}
        data={data}
        onSnapToItem={onSnapItem}
        renderItem={renderCarouselItem}
        layoutCardOffset={9}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH - 20}
        snapToAlignment={'center'}
        contentContainerCustomStyle={{ paddingTop: SLIDER_WIDTH / 5 }}
      />
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
  paginationActiveDot: {
    backgroundColor: 'white',
  },
  onboadingDescription: {
    textAlign: 'center',
  },
  btnNext: {
    marginTop: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
})
