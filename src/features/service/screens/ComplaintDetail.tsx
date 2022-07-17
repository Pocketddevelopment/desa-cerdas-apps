import TextInput from '@components/Input';
import Dot from '@components/pagination/PaginationDot';
import Row from '@components/Row';
import { Caption, Text } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CommentCard from '@service/components/CommentCard';
import { ComplaintDetailInterface } from '@service/models/interfaces/ComplaintDetail.interface';
import {
  getComplaintDetailThunk,
  updateCommentThunk,
} from '@service/models/thunks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, IconButton, useTheme } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Toast from 'react-native-toast-message';

const CHAT_BOX_HEIGHT = 50;

export type ComplaintDetailScreenProps = {
  id: string;
  date: string;
  title: string;
  description: string;
  images: { ImageUrl: string }[];
};

const ComplaintDetailScreen: React.FC<
  NativeStackScreenProps<DashboardStackParamList, 'ComplaintDetail'>
> = ({ navigation, route }) => {
  const { id, date, title, description, images } = route.params;
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const commentScrollRef = useRef<ScrollView>(null);

  const { loading } = useAppSelector((state: RootState) => state.service);

  const [data, setData] = useState<ComplaintDetailInterface>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [inputHeight, setInputHeight] = useState<number>(20);
  const [comment, setComment] = useState<string>('');

  function getDetail() {
    dispatch(getComplaintDetailThunk(id))
      .unwrap()
      .then((response) => {
        setData(response as ComplaintDetailInterface);
      })
      .catch((err) =>
        Toast.show({
          type: 'standard',
          text1: err.ResponseMessage,
        })
      );
  }

  useEffect(() => {
    navigation.setOptions({
      title: title || '',
    });
  }, [navigation, title]);

  useEffect(() => {
    getDetail();
  }, []);

  useEffect(() => {
    data &&
      navigation.setOptions({
        title: data.Subject,
      });
  }, [data]);

  const sendComment = () => {
    dispatch(
      updateCommentThunk({
        complaintId: id,
        description: comment,
      })
    )
      .unwrap()
      .then(() => {
        setComment('');
        getDetail();
      })
      .catch((err) => {
        Toast.show({
          type: 'standard',
          text1: 'Gagal menambahkan komentar\nSilahkan coba kembali',
        });
      });
  };

  const onSnapItem = (index: number) => {
    setActiveIndex(index);
  };

  const renderCarouselItem = ({ item, index }: any) => {
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
                DeviceContants.screenWidth / 2 - data?.ListImage?.length! * 16,
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
    <View style={styles.container}>
      <ScrollView
        ref={commentScrollRef}
        style={styles.container}
        contentContainerStyle={{
          paddingBottom:
            !data?.IsEnableComment && data?.StatusType !== 'Closed'
              ? 0
              : CHAT_BOX_HEIGHT - 30 + inputHeight,
        }}>
        <Carousel
          layout='default'
          initialScrollIndex={activeIndex}
          data={data?.ListImage || images}
          onSnapToItem={onSnapItem}
          renderItem={renderCarouselItem}
          sliderWidth={DeviceContants.screenWidth}
          itemWidth={DeviceContants.screenWidth}
          snapToAlignment={'center'}
        />
        <View style={styles.contentContainer}>
          {loading.complaintDetail ? (
            <ActivityIndicator />
          ) : (
            <>
              <Text size={16}>{data?.Description}</Text>
              <View style={styles.commentMetaDetail}>
                <Caption size={14} color={theme.colors.primary}>
                  {data?.Name}
                </Caption>
                <Caption>
                  {data?.Created || date} via {data?.Source || 'Aplikasi'}
                </Caption>
              </View>
              <View style={styles.commentSection}>
                {data && data.Detail.length > 0 ? (
                  <>
                    <SectionTitle>{`Balasan Keluhan (${data?.Detail.length})`}</SectionTitle>
                    <View style={styles.commentCards}>
                      {data?.Detail.map((e, i) => {
                        return (
                          <CommentCard
                            key={e.ID}
                            thumbnailUri={e.Photo}
                            content={e.Description}
                            date={e.Created}
                            medium={e.Source}
                            name={e.Name}
                            isSelf={e.Type === 'Customer'}
                          />
                        );
                      })}
                    </View>
                  </>
                ) : (
                  <Caption>Belum ada balasan</Caption>
                )}
              </View>
            </>
          )}
        </View>
      </ScrollView>
      <Row style={styles.chatBox}>
        {data?.StatusType === 'Closed' ? (
          <View
            style={[
              styles.successContainer,
              { backgroundColor: theme.colors['success-background'] },
            ]}>
            <Image
              source={require('@assets/check.webp')}
              style={styles.successIcon}
            />
            <Text color={theme.colors.success}>Selesai</Text>
          </View>
        ) : data?.IsEnableComment ? (
          <>
            <View style={styles.inputBox}>
              <TextInput
                placeholder='Balas Keluhan...'
                multiline
                style={{ paddingTop: 5 }}
                onContentSizeChange={(event) => {
                  setInputHeight(
                    event.nativeEvent.contentSize.height > 150
                      ? 100
                      : event.nativeEvent.contentSize.height - 10
                  );
                }}
                value={comment}
                disabled={loading.updateComment}
                onChangeText={(value: string) => setComment(value)}
                onFocus={() => commentScrollRef?.current?.scrollToEnd()}
              />
            </View>
            <IconButton
              icon={'send'}
              color={theme.colors.primary}
              disabled={comment.length <= 0 || loading.updateComment}
              onPress={() => sendComment()}
            />
          </>
        ) : null}
      </Row>
    </View>
  );
};

export default ComplaintDetailScreen;

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
    justifyContent: 'center',
  },
  inputBox: {
    flex: 1,
    marginRight: 5,
    minHeight: CHAT_BOX_HEIGHT,
    maxHeight: 150,
  },
  successContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 5,
    borderRadius: 20,
  },
  successIcon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
});
