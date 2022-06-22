import AttractionItem from '@attraction/components/AttractionItem';
import Separator from '@components/Separator';
import NewsItem from '@dashboard/components/NewsItem';
import { DashboardStackParamList } from '@dashboard/index';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

type EventListProps = {
  navigation: NativeStackNavigationProp<DashboardStackParamList, any>;
  route: RouteProp<any>;
};

const EventListScreen: React.FC<EventListProps> = ({ navigation, route }) => {
  const onPressItem = () => {
    navigation.navigate('AttractionDetail');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <NewsItem />
      <Separator width={'85%'} color={'lightgrey'} />
      <NewsItem />
      <Separator width={'85%'} color={'lightgrey'} />
      <NewsItem />
    </ScrollView>
  );
};

export default EventListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingVertical: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});
