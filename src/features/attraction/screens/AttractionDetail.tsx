import { AttractionCreativeDetailInterface } from '@attraction/models/interfaces/AttractionCreativeDetail.interface';
import { AttractionDestinationDetailInterface } from '@attraction/models/interfaces/AttractionDestinationDetail.interface';
import {
  getAttractionCreativeDetailThunk,
  getAttractionDestinationDetailThunk,
} from '@attraction/models/thunks';
import Button from '@components/Button';
import Failed from '@components/Failed';
import Dot from '@components/pagination/PaginationDot';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import RenderHTML from 'react-native-render-html';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Toast from 'react-native-toast-message';

export type AttractionDetailProps = {
  type: 'destination' | 'creative';
  id: string;
  title: string;
};

const AttractionDetailScreen: React.FC<
  NativeStackScreenProps<DashboardStackParamList, 'AttractionDetail'>
> = ({ navigation, route }) => {
  const {
    id: attractionId,
    title: placeholderTitle,
    type: attractionType,
  } = route.params;
  const { loading, error } = useAppSelector((state: RootState) => state.misc);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [data, setData] = useState<
    AttractionDestinationDetailInterface | AttractionCreativeDetailInterface
  >();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function getDetail() {
    switch (attractionType) {
      case 'destination':
        dispatch(getAttractionDestinationDetailThunk(attractionId))
          .unwrap()
          .then((response) => {
            setData(response as AttractionDestinationDetailInterface);
          })
          .catch((err) =>
            Toast.show({
              type: 'standard',
              text1: err.ResponseMessage,
            })
          );
        break;
      case 'creative':
        dispatch(getAttractionCreativeDetailThunk(attractionId))
          .unwrap()
          .then((response) => {
            setData(response as AttractionCreativeDetailInterface);
          })
          .catch((err) =>
            Toast.show({
              type: 'standard',
              text1: err.ResponseMessage,
            })
          );
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    getDetail();
    navigation.setOptions({
      title: placeholderTitle,
    });
  }, []);

  const onSnapItem = (index: number) => {
    setActiveIndex(index);
  };

  const openMaps = () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${data?.Latitude},${data?.Longitude}`;
    const label = data?.Title;
    const url: string = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    }) as string;

    Linking.openURL(url);
  };

  const renderCarouselItem = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => {
    return (
      <View key={index} style={styles.carouselContainer}>
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
      {loading.creative || loading.destination ? (
        <ActivityIndicator size={'large'} style={styles.loading} />
      ) : (
        data && (
          <>
            <Carousel
              layout='default'
              initialScrollIndex={activeIndex}
              data={data.ListImage}
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
                onPress={openMaps}>
                <Image
                  source={{
                    uri: 'http://13.250.44.36:8001/assets/images/icon/icon-maps.png',
                  }}
                  style={styles.icon}
                />{' '}
                Lihat Lokasi di Google Maps
              </Button>
              <View style={styles.section}>
                <RenderHTML
                  source={{ html: data.Description }}
                  contentWidth={DeviceContants.screenWidth}
                />
              </View>
            </View>
          </>
        )
      )}
      {(error.creative || error.destination) && (
        <Failed onBtnPress={() => getDetail()} />
      )}
    </ScrollView>
  );
};

export default AttractionDetailScreen;

const styles = StyleSheet.create({
  loading: {
    marginVertical: 50,
  },
  container: {
    flex: 1,
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
    height: 18,
    width: 18,
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
  section: {
    marginVertical: 10,
  },
});
