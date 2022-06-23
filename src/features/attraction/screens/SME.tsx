import SMECard from '@attraction/components/SMECard';
import dataSME from '@attraction/sme.json';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

const SMEScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPressSME = (item: any): void => {
    navigation.navigate('SMEDetail', {
      data: item,
    });
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <SMECard
        key={index}
        thumbnailUri={item.thumbnailUri}
        name={item.name}
        phone={item.phone}
        seller={item.name}
        onPress={() => onPressSME(item)}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={{ flexGrow: 1, padding: 10, paddingTop: 20 }}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={dataSME}
      renderItem={renderItem}
    />
  );
};

export default SMEScreen;

const styles = StyleSheet.create({});
