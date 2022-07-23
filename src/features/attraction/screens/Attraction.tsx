import AttractionItem from '@attraction/components/AttractionItem';
import { AttractionCreativeInterface } from '@attraction/models/interfaces/AttractionCreative.interface';
import { AttractionDestinationInterface } from '@attraction/models/interfaces/AttractionDestination.interface';
import {
  getAttractionCreativeListThunk,
  getAttractionDestinationListThunk,
} from '@attraction/models/thunks';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import { Text } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';

enum TargetType {
  DESTINATION = 'destination',
  CREATIVE = 'creative',
}

const DEFAULT_PAGE_SIZE = 5;
const DEFAULT_PAGE = 1;

const AttractionScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const { loading, destination, creative } = useAppSelector(
    (state: RootState) => state.misc
  );

  const onPressDestinationItem = (item: AttractionDestinationInterface) => {
    navigation.navigate('AttractionDetail', {
      id: item.ID,
      title: item.Title,
      type: 'destination',
    });
  };

  const onPressCreativeItem = (item: AttractionCreativeInterface) => {
    navigation.navigate('AttractionDetail', {
      id: item.ID,
      title: item.Title,
      type: 'creative',
    });
  };

  const onPressMore = (target: TargetType) => {
    navigation.navigate('MoreList', {
      target: target,
    });
  };

  useEffect(() => {
    dispatch(
      getAttractionDestinationListThunk({
        page: DEFAULT_PAGE,
        pageSize: DEFAULT_PAGE_SIZE,
      })
    );
    dispatch(
      getAttractionCreativeListThunk({
        page: DEFAULT_PAGE,
        pageSize: DEFAULT_PAGE_SIZE,
      })
    );
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <SpaceBetween key={TargetType.DESTINATION}>
          <SectionTitle>Destinasi Lokal</SectionTitle>
          <Text
            color={theme.colors.primary}
            onPress={() => onPressMore(TargetType.DESTINATION)}>
            Lihat selengkapnya
          </Text>
        </SpaceBetween>
        {destination?.ListTouristDestination.slice(0, 5).map((e, i) => (
          <View key={e.ID}>
            <AttractionItem
              thumbnailUri={e.ImageUrl}
              title={e.Title}
              description={e.Description}
              onPress={() => onPressDestinationItem(e)}
            />
            {i !== destination?.ListTouristDestination.length - 1 && (
              <Separator width={'90%'} color={'lightgrey'} />
            )}
          </View>
        ))}
        {loading.destination && <ActivityIndicator />}
      </View>
      <View style={styles.section} key={TargetType.CREATIVE}>
        <SpaceBetween>
          <Text style={styles.sectionTitle}>Industri Kreatif</Text>
          <Text
            color={theme.colors.primary}
            onPress={() => onPressMore(TargetType.CREATIVE)}>
            Lihat selengkapnya
          </Text>
        </SpaceBetween>
        {creative?.ListCreativeDestination.slice(0, 5).map((e, i) => (
          <View key={e.ID}>
            <AttractionItem
              thumbnailUri={e.ImageUrl}
              title={e.Title}
              description={e.Description}
              onPress={() => onPressCreativeItem(e)}
            />
            {i !== creative?.ListCreativeDestination.length - 1 && (
              <Separator width={'90%'} color={'lightgrey'} />
            )}
          </View>
        ))}
        {loading.creative && <ActivityIndicator />}
      </View>
    </ScrollView>
  );
};

export default AttractionScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});
