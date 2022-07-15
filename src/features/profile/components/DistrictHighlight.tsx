import Separator from '@components/Separator';
import { Caption } from '@components/typography';
import { getEventListThunk } from '@profile/models/thunks';
import { getReportBUMDesListThunk } from '@report/models/interfaces/thunks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import { requestStorageAndroid } from '@utils/permissions';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import RNFS from 'react-native-fs';
import { ActivityIndicator } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import ReportItem from '../../report/components/ReportItem';
import EventItem from './EventItem';

const DistrictHighlight = () => {
  const dispatch = useAppDispatch();
  const { loading: loadingProfile, events } = useAppSelector(
    (state: RootState) => state.profile
  );

  const { loading: loadingMisc, report } = useAppSelector(
    (state: RootState) => state.misc
  );

  useEffect(() => {
    dispatch(getEventListThunk(1));
    dispatch(getReportBUMDesListThunk(1));
  }, []);

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

  return (
    <View style={styles.card}>
      <View style={styles.section}>
        <Caption size={11}>Event Kegiatan</Caption>
        {loadingProfile.getEventList ? (
          <ActivityIndicator />
        ) : events.ListEvent.length > 0 ? (
          events.ListEvent.slice(0, 3).map((e, i) => (
            <View key={e.ID}>
              <EventItem
                id={e.ID}
                thumbnailUri={e.ImageUrl}
                date={e.Created}
                title={e.Title}
                description={e.Description}
              />
              {i !== events.ListEvent.slice(0, 3).length - 1 && (
                <Separator width={'85%'} />
              )}
            </View>
          ))
        ) : (
          <Caption style={styles.emptyText}>Belum ada event kegiatan</Caption>
        )}
      </View>
      <View style={styles.section}>
        <Caption size={11}>Laporan Perkembangan</Caption>
        {loadingMisc.bumdes ? (
          <ActivityIndicator />
        ) : report.bumdes.ListReportBumdes.length > 0 ? (
          report.bumdes.ListReportBumdes.slice(0, 3).map((e, i) => (
            <View key={e.ID}>
              <ReportItem
                format={e.Extension.replace('.', '')}
                date={e.Created}
                title={e.Title}
                onDownload={() =>
                  onPressItem(e.ImageUrl, `${e.Title}${e.Extension}`)
                }
              />
              {i !== report.bumdes.ListReportBumdes.slice(0, 3).length - 1 && (
                <Separator width={'90%'} />
              )}
            </View>
          ))
        ) : (
          <Caption style={styles.emptyText}>Belum ada event kegiatan</Caption>
        )}
      </View>
    </View>
  );
};

export default DistrictHighlight;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  section: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  emptyText: {
    textAlign: 'center',
    marginVertical: 10,
  },
});
