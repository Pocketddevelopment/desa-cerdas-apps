import Separator from '@components/Separator';
import { NotificationInterface } from '@notification/models/interfaces/Notification.interface';
import { getNotificationListThunk } from '@notification/models/thunks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ActivityIndicator, Caption, Text } from 'react-native-paper';
import NotificationItem from '../components/NotificationItem';

const NotificationListScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, notification } = useAppSelector(
    (state: RootState) => state.misc
  );

  const [page, setPage] = useState<number>(1);

  const getNotifications = useCallback(
    (page: number) => {
      dispatch(getNotificationListThunk(page));
    },
    [dispatch]
  );

  useEffect(() => {
    if (notification) {
      if (page <= notification.TotalPage) {
        getNotifications(page);
      }
    } else {
      getNotifications(page);
    }
  }, [page, getNotifications]);

  const renderItem = ({ item }: { item: NotificationInterface }) => {
    return (
      <NotificationItem
        key={item.ID}
        id={item.ID}
        date={item.Created}
        description={item.Description}
        title={item.Title}
        read={item.IsRead}
      />
    );
  };

  const EmptyComponent = () => {
    return !loading.notification ? (
      <Text style={styles.emptyContainer}>Tidak ada notifikasi</Text>
    ) : null;
  };

  const FooterComponent = () => {
    return (
      <>
        {loading.notification && <ActivityIndicator style={styles.loading} />}
        {page >= notification.TotalPage && !loading.notification && (
          <Caption style={styles.listEnd}>
            Semua notifikasi telah ditampilkan
          </Caption>
        )}
      </>
    );
  };

  return (
    <FlatList
      data={notification?.ListInbox}
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

export default NotificationListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
