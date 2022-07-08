import Separator from '@components/Separator';
import { Caption, Text } from '@components/typography';
import NewsItem from '@dashboard/components/NewsItem';
import News from '@news/models/interfaces/News.interface';
import { getNewsListThunk } from '@profile/models/thunks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const NewsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);

  const { loading, news } = useAppSelector((state: RootState) => state.misc);

  const getNews = useCallback(
    (page: number) => {
      dispatch(getNewsListThunk(page));
    },
    [dispatch]
  );

  useEffect(() => {
    if (news) {
      if (page <= news.TotalPage) {
        getNews(page);
      }
    } else {
      getNews(page);
    }
  }, [page, getNews]);

  const renderItem = ({ item, index }: { item: News; index: number }) => {
    return (
      <>
        <NewsItem
          key={item.ID}
          id={item.ID}
          thumbnailUri={item.ImageUrl}
          date={moment(item.Created).format('dddd, DD MMM YYYY')}
          title={item.Title}
          description={item.Description}
        />
        {index !== news?.ListNews.length && <Separator width={'90%'} />}
      </>
    );
  };

  const EmptyComponent = () => {
    return <Text style={styles.emptyContainer}>Tidak ada berita</Text>;
  };

  const FooterComponent = () => {
    return (
      <>
        {loading.news && <ActivityIndicator style={styles.loading} />}
        {page === news?.TotalPage && (
          <Caption style={styles.listEnd}>
            Semua berita telah ditampilkan
          </Caption>
        )}
      </>
    );
  };

  return (
    <FlatList
      data={news?.ListNews}
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

export default NewsList;

const styles = StyleSheet.create({
  emptyContainer: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  loading: {
    marginVertical: 5,
  },
  listEnd: {
    marginVertical: 10,
  },
});
