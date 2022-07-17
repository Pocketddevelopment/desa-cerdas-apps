import Container from '@components/Container';
import Failed from '@components/Failed';
import { Title } from '@components/typography';
import DeviceContants from '@constants/device';
import ContentInterface from '@dashboard/models/interfaces/Content.interface';
import { getPrivacyPolicyThunk } from '@dashboard/models/thunks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import RenderHTML from 'react-native-render-html';
import Toast from 'react-native-toast-message';

const PrivacyPolicyScreen: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state: RootState) => state.misc);
  const [data, setData] = useState<ContentInterface>();

  const getContent = useMemo(() => {
    dispatch(getPrivacyPolicyThunk())
      .unwrap()
      .then((response) => {
        setData(response as ContentInterface);
      })
      .catch((err) =>
        Toast.show({
          type: 'standard',
          text1: err.ResponseMessage,
        })
      );
  }, []);

  useEffect(() => {
    getContent;
  }, []);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading.pp ? (
          <ActivityIndicator size={'large'} style={styles.loading} />
        ) : data ? (
          <>
            <Title size={42} style={{ marginBottom: 20 }}>
              {data.Title}
            </Title>
            <RenderHTML
              source={{ html: data.Description }}
              contentWidth={DeviceContants.screenWidth}
            />
          </>
        ) : (
          <Failed onBtnPress={() => getContent} />
        )}
      </ScrollView>
    </Container>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  loading: {
    marginVertical: 50,
  },
});
