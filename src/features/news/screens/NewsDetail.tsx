import Failed from '@components/Failed';
import Dot from '@components/pagination/PaginationDot';
import { Caption, Title } from '@components/typography';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import NewsDetailInterface from '@news/models/interfaces/NewsDetail.interface';
import { getNewsDetailThunk } from '@dashboard/models/thunks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import RenderHTML from 'react-native-render-html';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Toast from 'react-native-toast-message';

export type NewsDetailProps = {
  id: string;
  title: string;
};

const NewsDetailScreen: React.FC<
  NativeStackScreenProps<DashboardStackParamList, 'NewsDetail'>
> = ({ navigation, route }) => {
  const { id: newsId, title: placeholderTitle } = route.params;
  const { loading } = useAppSelector((state: RootState) => state.misc);
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const [data, setData] = useState<NewsDetailInterface>();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function getDetail() {
    dispatch(getNewsDetailThunk(newsId))
      .unwrap()
      .then((response) => {
        setData(response as NewsDetailInterface);
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
                DeviceContants.screenWidth / 2 - data?.ListImage.length! * 16,
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
      {loading.news ? (
        <ActivityIndicator size={'large'} style={styles.loading} />
      ) : data ? (
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
            <Caption>
              {moment(data.Created).format('dddd, DD MMMM YYYY')}
            </Caption>
            <Title
              style={{ marginVertical: 10 }}
              size={20}
              color={theme.colors.primary}>
              {data.Title}
            </Title>
            <RenderHTML
              source={{ html: data.Description }}
              contentWidth={DeviceContants.screenWidth}
            />
          </View>
        </>
      ) : (
        <Failed onBtnPress={() => getDetail()} />
      )}
    </ScrollView>
  );
};

export default NewsDetailScreen;

const styles = StyleSheet.create({
  loading: {
    marginVertical: 50,
  },
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
