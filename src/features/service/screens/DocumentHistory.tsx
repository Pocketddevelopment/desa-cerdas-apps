import Separator from '@components/Separator';
import { Caption, Text } from '@components/typography';
import DocumentItem from '@service/components/DocumentItem';
import { DocumentHistoryInterface } from '@service/models/interfaces/DocumentHistory.interface';
import { getDocumentHistoryListThunk } from '@service/models/thunks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import { requestStorageAndroid } from '@utils/permissions';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import RNFS from 'react-native-fs';
import { ActivityIndicator } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const DocumentHistoryScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const { loading, documentHistory } = useAppSelector(
    (state: RootState) => state.service
  );

  const [page, setPage] = useState<number>(1);

  const getList = useCallback(
    (page: number) => {
      dispatch(getDocumentHistoryListThunk(page));
    },
    [dispatch]
  );

  useEffect(() => {
    if (documentHistory) {
      if (page <= documentHistory.TotalPage) {
        getList(page);
      }
    } else {
      getList(page);
    }
  }, [page, getList]);

  const onPressItem = async (url: string, fileName: string) => {
    const isGranted = await requestStorageAndroid();
    if (isGranted) {
      RNFS.downloadFile({
        fromUrl: url,
        toFile: `${RNFS.DownloadDirectoryPath}/${fileName}`,
      })
        .promise.then((r) => {
          Toast.show({
            type: 'standard',
            text1: `Berhasil mengunduh ${fileName}`,
          });
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
    item: DocumentHistoryInterface;
    index: number;
  }) => {
    return (
      <DocumentItem
        key={index}
        format={item.Extesnsion}
        date={item.ApprovalDate}
        title={item.AdministrationName}
        onDownload={() =>
          onPressItem(
            item.FileURL,
            `${item.AdministrationName}.${item.Extesnsion}`
          )
        }
      />
    );
  };

  const EmptyComponent = () => {
    return (
      <Text style={styles.emptyContainer}>
        Tidak ada Riwayat Surat / Dokumen
      </Text>
    );
  };

  const FooterComponent = () => {
    return (
      <>
        {loading.documentHistory && (
          <ActivityIndicator style={styles.loading} />
        )}
        {page >= documentHistory.TotalPage &&
          documentHistory.ListAdministrationHistory.length > 0 &&
          !loading.documentHistory && (
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
      data={documentHistory.ListAdministrationHistory}
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

export default DocumentHistoryScreen;

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
