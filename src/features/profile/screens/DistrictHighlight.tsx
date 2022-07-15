import Row from '@components/Row';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import { Text } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import { DashboardStackParamList } from '@dashboard/index';
import EventItem from '@profile/components/EventItem';
import { getEventListThunk } from '@profile/models/thunks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ReportBUMDesInterface from '@report/models/interfaces/ReportBUMDes.interface';
import { getReportBUMDesListThunk } from '@report/models/interfaces/thunks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import { requestStorageAndroid } from '@utils/permissions';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import RNFS from 'react-native-fs';
import { ActivityIndicator, Caption, useTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import ReportItem from '../../report/components/ReportItem';

const DistrictHighlightScreen: React.FC = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const dispatch = useAppDispatch();

  const { loading: loadingProfile, events } = useAppSelector(
    (state: RootState) => state.profile
  );

  const { loading: loadingMisc, report } = useAppSelector(
    (state: RootState) => state.misc
  );

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (events.ListEvent.length <= 0) {
      dispatch(getEventListThunk(1));
    }
  }, []);

  const getReportsBUMDes = useCallback(
    (page: number) => {
      dispatch(getReportBUMDesListThunk(page));
    },
    [dispatch]
  );

  useEffect(() => {
    if (report.bumdes) {
      if (page <= report.bumdes.TotalPage) {
        getReportsBUMDes(page);
      }
    } else {
      getReportsBUMDes(page);
    }
  }, [page, getReportsBUMDes]);

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

  const renderItem = ({ item }: { item: ReportBUMDesInterface }) => {
    return (
      <ReportItem
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
    return <Text style={styles.emptyContainer}>Tidak ada berita</Text>;
  };

  const FooterComponent = () => {
    return (
      <>
        {loadingMisc.bumdes && <ActivityIndicator style={styles.loading} />}
        {page >= report.bumdes.TotalPage && (
          <Caption style={styles.listEnd}>
            Semua laporan BUMDes telah ditampilkan
          </Caption>
        )}
      </>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <SpaceBetween>
        <SectionTitle>Event Kegiatan</SectionTitle>
        <Text
          color={theme.colors.primary}
          onPress={() => navigation.navigate('EventList')}>
          Lihat selengkapnya
        </Text>
      </SpaceBetween>
      {loadingProfile.getEventList ? (
        <ActivityIndicator />
      ) : events.ListEvent.length > 0 ? (
        events.ListEvent.slice(0, 5).map((e, i) => (
          <View key={e.ID}>
            <EventItem
              id={e.ID}
              thumbnailUri={e.ImageUrl}
              date={e.Created}
              title={e.Title}
              description={e.Description}
            />
            {i !== events.ListEvent.slice(0, 5).length - 1 && (
              <Separator width={'85%'} />
            )}
          </View>
        ))
      ) : (
        <Caption style={styles.emptyText}>Belum ada event kegiatan</Caption>
      )}

      <Row style={{ marginTop: 10 }}>
        <SectionTitle>Laporan Perkembangan</SectionTitle>
      </Row>
      <FlatList
        data={report.bumdes.ListReportBumdes}
        renderItem={renderItem}
        ListEmptyComponent={EmptyComponent}
        ListFooterComponent={FooterComponent}
        ItemSeparatorComponent={() => <Separator width={'85%'} />}
        onEndReachedThreshold={0.4}
        onEndReached={() => {
          setPage(page + 1);
        }}
      />
    </ScrollView>
  );
};

export default DistrictHighlightScreen;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 15,
  },
  btnMaps: {
    margin: 5,
    width: 'auto',
  },
  emptyText: {
    textAlign: 'center',
    marginVertical: 10,
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
