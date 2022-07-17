import SMECard from '@attraction/components/SMECard';
import { SMEInterface } from '@attraction/models/interfaces/SME.interface';
import { getSMEListThunk } from '@attraction/models/thunks';
import { Caption, Text } from '@components/typography';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const SMEScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const dispatch = useAppDispatch();
  const { loading, sme } = useAppSelector((state: RootState) => state.misc);
  const [page, setPage] = useState<number>(1);

  const getList = useCallback(
    (page: number) => {
      dispatch(getSMEListThunk(page));
    },
    [dispatch]
  );

  useEffect(() => {
    if (sme) {
      if (page <= sme.TotalPage) {
        getList(page);
      }
    } else {
      getList(page);
    }
  }, [page, getList]);

  const onPressSME = (item: SMEInterface): void => {
    navigation.navigate('SMEDetail', {
      id: item.ID,
      title: item.Title,
    });
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: SMEInterface;
    index: number;
  }) => {
    return (
      <SMECard
        key={index}
        thumbnailUri={item.ImageUrl}
        name={item.Title}
        phone={item.ContactPhone}
        seller={item.ContactName}
        onPress={() => onPressSME(item)}
      />
    );
  };

  const EmptyComponent = () => {
    return <Text style={styles.emptyContainer}>Tidak ada UMKM</Text>;
  };

  const FooterComponent = () => {
    return (
      <>
        {loading.sme && <ActivityIndicator style={styles.loading} />}
        {page >= ((sme && sme.TotalPage) || 1) && !loading.sme && (
          <Caption style={styles.listEnd}>Semua UMKM telah ditampilkan</Caption>
        )}
      </>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={sme?.ListUMKM}
      renderItem={renderItem}
      ListEmptyComponent={EmptyComponent}
      ListFooterComponent={FooterComponent}
      onEndReachedThreshold={0.4}
      onEndReached={() => {
        setPage(page + 1);
      }}
    />
  );
};

export default SMEScreen;

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 10, paddingTop: 20 },
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
