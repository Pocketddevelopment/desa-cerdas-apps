import Container from '@components/Container';
import Separator from '@components/Separator';
import { Caption, Text } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import ComplaintCard from '@service/components/ComplaintCard';
import ComplaintItem from '@service/components/ComplaintItem';
import ComplaintInterface from '@service/models/interfaces/Complaint.interface';
import { getComplaintListThunk } from '@service/models/thunks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const ComplaintScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const { loading, complaintList } = useAppSelector(
    (state: RootState) => state.service
  );

  useEffect(() => {
    dispatch(getComplaintListThunk(page));
  }, []);

  const renderItem = ({ item }: { item: ComplaintInterface }) => {
    return (
      <ComplaintItem
        key={item.ID}
        id={item.ID}
        date={item.Created}
        thumbnailUri={item.ListImage[0].ImageUrl}
        title={item.Subject}
        description={item.Description}
        count={item.Detail.length}
        resolved={item.StatusType === 'Closed'}
      />
    );
  };

  const EmptyComponent = () => {
    return !loading.complaintList ? (
      <Text style={styles.emptyContainer}>Tidak ada keluhan</Text>
    ) : null;
  };

  const FooterComponent = () => {
    return (
      <>
        {loading.complaintList && <ActivityIndicator style={styles.loading} />}
        {page >= complaintList.TotalPage &&
          complaintList.ListComplaint.length > 0 && (
            <Caption style={styles.listEnd}>
              Semua keluhan telah ditampilkan
            </Caption>
          )}
      </>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Container>
        <View style={{ paddingHorizontal: 20 }}>
          <ComplaintCard />
        </View>

        <View style={styles.complaintSection}>
          <SectionTitle>Keluhan Warga</SectionTitle>
          <FlatList
            data={complaintList.ListComplaint}
            renderItem={renderItem}
            ListEmptyComponent={EmptyComponent}
            ListFooterComponent={FooterComponent}
            ItemSeparatorComponent={() => <Separator width={'85%'} />}
            onEndReachedThreshold={0.4}
            onEndReached={() => {
              setPage(page + 1);
            }}
          />
        </View>
      </Container>
    </ScrollView>
  );
};

export default ComplaintScreen;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 0 },
  complaintSection: {
    marginTop: 20,
    width: '100%',
  },
  emptyContainer: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  loading: {
    marginVertical: 5,
  },
  listEnd: {
    marginVertical: 10,
    textAlign: 'center',
  },
});
