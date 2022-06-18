import TextInput from '@components/Input';
import Dot from '@components/pagination/PaginationDot';
import Row from '@components/Row';
import { Caption, Text } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import DeviceContants from '@constants/device';
import CommentCard from '@service/components/CommentCard';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const data: string[] = [
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
];

const CHAT_BOX_HEIGHT = 50;

const ComplaintDetailScreen: React.FC = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [inputHeight, setInputHeight] = useState<number>(20);

  const onSnapItem = (index: number) => {
    setActiveIndex(index);
  };

  const renderCarouselItem = ({ item, index }: any) => {
    return (
      <View style={styles.carouselContainer}>
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
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.bodyContainer,
          { paddingBottom: CHAT_BOX_HEIGHT - 30 + inputHeight },
        ]}>
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
          <Text size={16}>
            Yth. pak kades, saya ada sedikit uneg2 nih. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua.{'\n'}Tolong bantuannya, terima
            kasih.
          </Text>
          <View style={styles.commentMetaDetail}>
            <Caption size={14} color={theme.colors.primary}>
              Bambang Hariyadi
            </Caption>
            <Caption>12 Maret 2022 14.04 via Aplikasi</Caption>
          </View>
          <View style={styles.commentSection}>
            <SectionTitle>Balasan Keluhan (6)</SectionTitle>
            <View style={styles.commentCards}>
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
                content='Wah, pak rokim ya ini yang jawabin. Kira2 tanggal mulai berjalannya kapan ya pak?'
                date='10 Maret 2022 15:27'
                medium='Aplikasi'
                name='Bambang Hariyadi'
                isSelf
              />
              <CommentCard
                thumbnailUri='https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
                content='Untuk perihal tersebut kami belum bisa pastikan ya pak.'
                date='10 Maret 2022 16:55'
                medium='Anjungan Pelayanan Mandiri'
                name='Rokim | Kepala Seksi Kesejahteraan'
              />
              <CommentCard
                thumbnailUri='https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
                content='Waduh bisa2 keberlangsungan desa kita bisa terancam dong kalua tidak segera dilaksanakan. Kalau sudah seperti itu apa bentuk tanggungjawab dari aparat desa?'
                date='10 Maret 2022 17:24'
                medium='Aplikasi'
                name='Bambang Hariyadi'
                isSelf
              />
              <CommentCard
                thumbnailUri='https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
                content='Mohon maaf pak, sekali lagi kami belum bisa pastikan karena sedang dikaji oleh tim ahlinya. Terima kasih.'
                date='11 Maret 2022 09:31'
                medium='Anjungan Pelayanan Mandiri'
                name='Rokim | Kepala Seksi Kesejahteraan'
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Row style={styles.chatBox}>
        <View style={styles.inputBox}>
          <TextInput
            placeholder='Balas Keluhan'
            multiline
            style={{ paddingTop: 5 }}
            onContentSizeChange={(event) => {
              setInputHeight(
                event.nativeEvent.contentSize.height > 150
                  ? 100
                  : event.nativeEvent.contentSize.height - 10
              );
            }}
          />
        </View>
        <IconButton icon={'send'} color={theme.colors.primary} />
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
  },
  contentContainer: {
    padding: 20,
  },
  pagination: {
    position: 'absolute',
    bottom: -15,
  },
  paginationDot: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    opacity: 1,
    width: 20,
    height: 20,
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
  commentCards: {
    marginVertical: 5,
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
    maxHeight: 150,
    width: '100%',
    paddingRight: 10,
    paddingLeft: 20,
    paddingVertical: 10,
  },
  inputBox: {
    flex: 1,
    marginRight: 5,
    minHeight: CHAT_BOX_HEIGHT,
    maxHeight: 150,
  },
});
