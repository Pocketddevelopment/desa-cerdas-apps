import AttractionItem from '@attraction/components/AttractionItem';
import Separator from '@components/Separator';
import { DashboardStackParamList } from '@dashboard/index';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import dataAttraction from '@attraction/attraction.json';
import dataIndustry from '@attraction/industry.json';

type MoreListProps = {
  navigation: NativeStackNavigationProp<DashboardStackParamList, any>;
  route: RouteProp<any>;
};

const MoreListScreen: React.FC<MoreListProps> = ({ navigation, route }) => {
  const target = route.params?.target;

  useEffect(() => {
    navigation.setOptions({
      title: target === 'attraction' ? 'Destinasi Lokal' : 'Industri Kreatif',
    });
  }, [navigation, target]);

  const onPressItem = (item: any) => {
    navigation.navigate('AttractionDetail', {
      data: item,
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {target === 'attraction'
        ? dataAttraction.map((e, i) => (
            <>
              <AttractionItem
                key={e.title}
                thumbnailUri={e.thumbnailUri}
                title={e.title}
                description={e.description}
                onPress={() => onPressItem(e)}
              />
              {i !== dataAttraction.length - 1 && (
                <Separator width={'85%'} color={'lightgrey'} />
              )}
            </>
          ))
        : dataIndustry.slice(0, 5).map((e, i) => (
            <>
              <AttractionItem
                key={e.title}
                thumbnailUri={e.thumbnailUri}
                title={e.title}
                description={e.description}
                onPress={() => onPressItem(e)}
              />
              {i !== dataIndustry.length - 1 && (
                <Separator width={'85%'} color={'lightgrey'} />
              )}
            </>
          ))}
    </ScrollView>
  );
};

export default MoreListScreen;

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
