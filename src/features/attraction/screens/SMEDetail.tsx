import { SMEDetailInterface } from '@attraction/models/interfaces/SMEDetail.interface';
import { getSMEDetailThunk } from '@attraction/models/thunks';
import Button from '@components/Button';
import Failed from '@components/Failed';
import Dot from '@components/pagination/PaginationDot';
import { Text, Title } from '@components/typography';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import RenderHTML from 'react-native-render-html';
import Share from 'react-native-share';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Toast from 'react-native-toast-message';

export type SMEDetailProps = {
  id: string;
  title: string;
};

const SMEDetailScreen: React.FC<
  NativeStackScreenProps<DashboardStackParamList, 'SMEDetail'>
> = ({ navigation, route }) => {
  const { id: smeId, title: placeholderTitle } = route.params;
  const { loading } = useAppSelector((state: RootState) => state.misc);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const [data, setData] = useState<SMEDetailInterface>();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function getDetail() {
    dispatch(getSMEDetailThunk(smeId))
      .unwrap()
      .then((response) => {
        setData(response as SMEDetailInterface);
      })
      .catch((err) =>
        Toast.show({
          type: 'standard',
          text1: err.ResponseMessage,
        })
      );
  }

  useEffect(() => {
    getDetail();
    navigation.setOptions({
      title: placeholderTitle,
    });
  }, []);

  useEffect(() => {
    data &&
      navigation.setOptions({
        title: data.Title,
      });
  }, [data]);

  const onSnapItem = (index: number) => {
    setActiveIndex(index);
  };

  const onPressChat = async () => {
    const shareOptions = {
      title: `Hubungi ${data?.Title} melalui Whatsapp`,
      message: `Halo ${data?.Title} dengan Bapak/Ibu ${data?.ContactName}, saya mau bertanya. `,
      social: Share.Social.WHATSAPP,
      whatsAppNumber: data?.ContactPhone.replace('0', '62'),
    };
    try {
      await Share.shareSingle(shareOptions);
    } catch (err) {
      Toast.show({
        type: 'standard',
        text1: 'Anda tidak memilki aplikasi Whatsapp yang terpasang',
      });
    }
  };

  const renderCarouselItem = ({ item, index }: any) => {
    return (
      <View style={styles.carouselContainer}>
        <Image source={{ uri: item.ImageUrl }} style={styles.image} />
        <Pagination
          activeDotIndex={activeIndex}
          dotsLength={1}
          dotStyle={{ margin: 0 }}
          containerStyle={[
            styles.pagination,
            {
              left:
                DeviceContants.screenWidth / 2 - data!.ListImage.length * 16,
            },
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
      {loading.sme ? (
        <ActivityIndicator size={'large'} style={styles.loading} />
      ) : data ? (
        <>
          <Carousel
            layout='default'
            initialScrollIndex={activeIndex}
            data={data?.ListImage}
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
                <RenderHTML
                  baseStyle={{ fontSize: 16, color: theme.colors.text }}
                  source={{ html: data.Description }}
                  contentWidth={DeviceContants.screenWidth}
                />
              </View>
              <View style={styles.section}>
                <Title size={14} style={styles.title}>
                  Info Penjual
                </Title>
                <Text size={16}>
                  {data.ContactName}
                  {'\n'}
                  {data.ContactPhone}
                </Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <Failed onBtnPress={() => getDetail()} />
      )}
    </ScrollView>
  );
};

export default SMEDetailScreen;

const styles = StyleSheet.create({
  loading: {
    marginVertical: 50,
  },
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
