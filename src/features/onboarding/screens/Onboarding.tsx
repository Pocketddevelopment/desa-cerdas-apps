import React from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Text } from 'react-native-paper'

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
    img: require('assets/onboarding-2.webp'),
    text: 'Cari tahu semua tentang desa Anda termasuk berita, statistik, wisata, dan lainnya',
  },
]

export const SLIDER_WIDTH = Dimensions.get('window').width

const OnboardingScreen: React.FC = () => {
  const renderCarouselItem = ({ item, index }: any) => {
    return (
      <View style={styles.itemContainer} key={index}>
        <Image source={item.img} style={styles.image} />
        <Text>{item.text}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('assets/onboarding-background.webp')} />
      <Carousel
        layout='default'
        data={data}
        renderItem={renderCarouselItem}
        layoutCardOffset={9}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH - 20}
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
  image: {
    width: 200,
    height: 200,
  },
})
