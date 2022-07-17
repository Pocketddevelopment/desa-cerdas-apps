import AttractionItem from '@attraction/components/AttractionItem';
import { AttractionCreativeInterface } from '@attraction/models/interfaces/AttractionCreative.interface';
import { AttractionDestinationInterface } from '@attraction/models/interfaces/AttractionDestination.interface';
import {
  getAttractionCreativeListThunk,
  getAttractionDestinationListThunk,
} from '@attraction/models/thunks';
import Separator from '@components/Separator';
import { Caption, Text } from '@components/typography';
import { DashboardStackParamList } from '@dashboard/index';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export type MoreListScreenProps = {
  target: 'destination' | 'creative';
};

const MoreListScreen: React.FC<
  NativeStackScreenProps<DashboardStackParamList, 'MoreList'>
> = ({ navigation, route }) => {
  const target = route.params.target;

  const dispatch = useAppDispatch();
  const { loading, destination, creative } = useAppSelector(
    (state: RootState) => state.misc
  );

  const [page, setPage] = useState<number>(1);

  const onPressDestinationItem = (item: AttractionDestinationInterface) => {
    navigation.navigate('AttractionDetail', {
      id: item.ID,
      title: item.Title,
      type: 'destination',
    });
  };

  const onPressCreativeItem = (item: AttractionCreativeInterface) => {
    navigation.navigate('AttractionDetail', {
      id: item.ID,
      title: item.Title,
      type: 'creative',
    });
  };

  const getTargetName = useCallback(() => {
    switch (target) {
      case 'destination':
        return 'destinasi lokal';
      case 'creative':
        return 'industri kreatif';
      default:
        return 'data';
    }
  }, [target]);

  const getSource = useCallback(() => {
    switch (target) {
      case 'destination':
        return destination;
      case 'creative':
        return creative;
      default:
        return { TotalPage: 0 };
    }
  }, [target]);

  const getSourceData = useCallback(() => {
    switch (target) {
      case 'destination':
        return destination?.ListTouristDestination;
      case 'creative':
        return creative?.ListCreativeDestination;
      default:
        return [];
    }
  }, [target]);

  const getItemRenderer = useCallback(() => {
    switch (target) {
      case 'destination':
        return renderDestinationItem;
      case 'creative':
        return renderCreativeItem;
      default:
        return undefined;
    }
  }, [target]);

  const getDataList = useCallback(
    (page: number) => {
      switch (target) {
        case 'destination':
          dispatch(
            getAttractionDestinationListThunk({
              page: page,
            })
          );
          break;
        case 'creative':
          dispatch(
            getAttractionCreativeListThunk({
              page: page,
            })
          );
          break;
        default:
          break;
      }
    },
    [target]
  );

  useEffect(() => {
    navigation.setOptions({
      title: target === 'destination' ? 'Destinasi Lokal' : 'Industri Kreatif',
    });
  }, [navigation, target]);

  useEffect(() => {
    switch (target) {
      case 'destination':
        if (destination) {
          if (page <= destination.TotalPage) {
            getDataList(page);
          }
        } else {
          getDataList(page);
        }
        break;
      case 'creative':
        if (creative) {
          if (page <= creative.TotalPage) {
            getDataList(page);
          }
        } else {
          getDataList(page);
        }
      default:
        break;
    }
  }, [page]);

  const renderDestinationItem = ({
    item,
    index,
  }: {
    item: AttractionDestinationInterface;
    index: number;
  }) => {
    return (
      <View key={item.ID}>
        <AttractionItem
          thumbnailUri={item.ImageUrl}
          title={item.Title}
          description={item.Description}
          onPress={() => onPressDestinationItem(item)}
        />
        {index !== destination!.ListTouristDestination.length - 1 && (
          <Separator width={'90%'} color={'lightgrey'} />
        )}
      </View>
    );
  };

  const renderCreativeItem = ({
    item,
    index,
  }: {
    item: AttractionCreativeInterface;
    index: number;
  }) => {
    return (
      <View key={item.ID}>
        <AttractionItem
          thumbnailUri={item.ImageUrl}
          title={item.Title}
          description={item.Description}
          onPress={() => onPressCreativeItem(item)}
        />
        {index !== creative!.ListCreativeDestination.length - 1 && (
          <Separator width={'90%'} color={'lightgrey'} />
        )}
      </View>
    );
  };

  const EmptyComponent = () => {
    return (
      <Text style={styles.emptyContainer}>Tidak ada {getTargetName()}</Text>
    );
  };

  const FooterComponent = () => {
    return (
      <>
        {loading[target] && <ActivityIndicator style={styles.loading} />}
        {page >= getSource()!.TotalPage && !loading[target] && (
          <Caption style={styles.listEnd}>
            Semua {getTargetName()} telah ditampilkan
          </Caption>
        )}
      </>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      data={getSourceData()}
      renderItem={getItemRenderer()}
      ListEmptyComponent={EmptyComponent}
      ListFooterComponent={FooterComponent}
      onEndReachedThreshold={0.4}
      onEndReached={() => {
        setPage(page + 1);
      }}
    />
  );
};

export default MoreListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingVertical: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
  emptyContainer: {
    marginVertical: 20,
    textAlign: 'center',
  },
  loading: {
    marginVertical: 5,
  },
  listEnd: {
    textAlign: 'center',
    marginVertical: 10,
  },
});
