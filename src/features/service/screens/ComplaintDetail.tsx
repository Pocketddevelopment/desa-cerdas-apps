import TextInput from '@components/Input';
import Row from '@components/Row';
import DeviceContants from '@constants/device';
import CommentCard from '@service/components/CommentCard';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Caption, IconButton, Text, Title, useTheme } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

const data: string[] = [
  'https://static.vecteezy.com/system/resources/previews/003/355/926/non_2x/business-banner-design-with-blue-wave-background-free-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/003/355/926/non_2x/business-banner-design-with-blue-wave-background-free-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/003/355/926/non_2x/business-banner-design-with-blue-wave-background-free-vector.jpg',
];

const CHAT_BOX_HEIGHT = 64;

const ComplaintDetailScreen: React.FC = () => {
  const theme = useTheme();

  const renderCarouselItem = ({ item, index }: any) => {
    return (
      <View key={index}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
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
          <Title style={{ marginBottom: 20 }}>
            Himbauan vaksinasi booster dalam rangka mempercepat ketahanan
            Covid19 nasional
          </Title>
          <Text>
            Perjuangan pemutusan rantai penularan Covid19 di Indonesia belumlah
            selesai. Oleh karena itu, lorem ipsum dolor sit amet, consetetur
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
            amet.
          </Text>
          <View style={styles.commentMetaDetail}>
            <Caption style={{ color: theme.colors.primary }}>
              Bambang Hariyadi
            </Caption>
            <Caption>12 Maret 2022 14.04 via Aplikasi</Caption>
          </View>
          <View style={styles.commentSection}>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
              Balasan Keluhan (6)
            </Text>
            <CommentCard
              thumbnailUri='https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
              content='Terima kasih bapak Bambang atas masukannya. Untuk saat ini pak Kades
            tengah mencanangkan program baru seperti yang telah bapak usulkan
            diatas. Mohon untuk bapak agar sabar menunggu hingga berjalan ya.'
              date='10 Maret 2022 15:11'
              medium='Anjungan Pelayanan Mandiri'
              name='Rokim | Kepala Seksi Kesejahteraan'
            />
            <CommentCard
              thumbnailUri='https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
              content='Terima kasih bapak Bambang atas masukannya. Untuk saat ini pak Kades
            tengah mencanangkan program baru seperti yang telah bapak usulkan
            diatas. Mohon untuk bapak agar sabar menunggu hingga berjalan ya.'
              date='10 Maret 2022 15:11'
              medium='Anjungan Pelayanan Mandiri'
              name='Rokim | Kepala Seksi Kesejahteraan'
              isSelf
            />
          </View>
        </View>
      </ScrollView>
      <Row style={styles.chatBox}>
        <View style={{ flex: 1 }}>
          <TextInput placeholder='Balas Keluhan' shadow={false} multiline />
        </View>
        <IconButton icon={'send'} />
      </Row>
    </View>
  );
};

export default ComplaintDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flexGrow: 1,
    paddingBottom: CHAT_BOX_HEIGHT,
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
  commentMetaDetail: {
    marginTop: 10,
  },
  commentSection: {
    marginTop: 20,
  },
  chatBox: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1,
    bottom: 0,
    left: 0,
    minHeight: CHAT_BOX_HEIGHT,
    width: '100%',
    paddingHorizontal: 20,
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
