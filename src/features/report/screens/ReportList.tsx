import Separator from '@components/Separator';
import { Text } from '@components/typography';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import { requestStorageAndroid } from '@utils/permissions';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import { ActivityIndicator, Caption } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import ReportItem from '../components/ReportItem';
import ReportAPBDInterface from '../models/interfaces/ReportAPBD.interface';
import { getReportAPBDListThunk } from '../models/interfaces/thunks';

const ReportListScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const { loading, report } = useAppSelector((state: RootState) => state.misc);

  const [page, setPage] = useState<number>(1);

  const getList = useCallback(
    (page: number) => {
      dispatch(getReportAPBDListThunk(page));
    },
    [dispatch]
  );

  useEffect(() => {
    if (report.apbd) {
      if (page <= report.apbd.TotalPage) {
        getList(page);
      }
    } else {
      getList(page);
    }
  }, [page, getList]);

  const onPressItem = async (url: string, fileName: string) => {
    const isGranted = await requestStorageAndroid();
    const filePath = `${RNFS.DownloadDirectoryPath}/${fileName}`;
    if (isGranted) {
      RNFS.downloadFile({
        fromUrl: url,
        toFile: filePath,
      })
        .promise.then((r) => {
          FileViewer.open(filePath);
        })
        .catch((err) => {
          Toast.show({
            type: 'standard',
            text1: `Gagal mengunduh ${fileName}`,
          });
        });
    } else {
      Toast.show({
        type: 'standard',
        text1: 'Tidak ada izin akses penyimpanan',
      });
    }
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: ReportAPBDInterface;
    index: number;
  }) => {
    return (
      <ReportItem
        key={index}
        format={item.Extension.replace('.', '')}
        date={item.Created}
        title={item.Title}
        onDownload={() =>
          onPressItem(item.ImageUrl, `${item.Title}${item.Extension}`)
        }
      />
    );
  };

  const EmptyComponent = () => {
    return <Text style={styles.emptyContainer}>Tidak ada Laporan APBD</Text>;
  };

  const FooterComponent = () => {
    return (
      <>
        {loading.report && <ActivityIndicator style={styles.loading} />}
        {page >= ((report.apbd && report.apbd.TotalPage) || 1) &&
          !loading.report && (
            <Caption style={styles.listEnd}>
              Semua Laporan APBD telah ditampilkan
            </Caption>
          )}
      </>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      data={report.apbd?.ListReportAPBD}
      renderItem={renderItem}
      ListEmptyComponent={EmptyComponent}
      ListFooterComponent={FooterComponent}
      ItemSeparatorComponent={() => <Separator width={'95%'} />}
      onEndReachedThreshold={0.4}
      onEndReached={() => {
        setPage(page + 1);
      }}
    />
  );
};

export default ReportListScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
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
