import Separator from '@components/Separator';
import { Caption, Text } from '@components/typography';
import { DashboardStackParamList } from '@dashboard/index';
import EventItem from '@profile/components/EventItem';
import EventInterface from '@profile/models/interfaces/Event.interface';
import { getEventListThunk } from '@profile/models/thunks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const EventListScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackScreenProps<DashboardStackParamList>>();
  const dispatch = useAppDispatch();

  const { loading, events } = useAppSelector(
    (state: RootState) => state.profile
  );

  const [page, setPage] = useState<number>(1);

  const getEventList = useCallback(
    (page: number) => {
      dispatch(getEventListThunk(page));
    },
    [dispatch]
  );

  useEffect(() => {
    if (events) {
      if (page <= events.TotalPage) {
        getEventList(page);
      }
    } else {
      getEventList(page);
    }
  }, [page, getEventList]);

  const renderItem = ({ item }: { item: EventInterface }) => {
    return (
      <EventItem
        id={item.ID}
        thumbnailUri={item.ImageUrl}
        date={item.Created}
        title={item.Title}
        description={item.Description}
      />
    );
  };

  const EmptyComponent = () => {
    return <Text style={styles.emptyContainer}>Tidak ada berita</Text>;
  };

  const FooterComponent = () => {
    return (
      <>
        {loading.getEventList && <ActivityIndicator style={styles.loading} />}
        {page >= events.TotalPage && (
          <Caption style={styles.listEnd}>
            Semua event kegiatan telah ditampilkan
          </Caption>
        )}
      </>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={events.ListEvent}
      renderItem={renderItem}
      ListEmptyComponent={EmptyComponent}
      ListFooterComponent={FooterComponent}
      ItemSeparatorComponent={() => <Separator width={'85%'} />}
      onEndReachedThreshold={0.4}
      onEndReached={() => {
        setPage(page + 1);
      }}
    />
  );
};

export default EventListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingVertical: 5,
  },
  emptyContainer: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  loading: {
    marginVertical: 5,
  },
  listEnd: {
    textAlign: 'center',
    marginVertical: 10,
  },
});
