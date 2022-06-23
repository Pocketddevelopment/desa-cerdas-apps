import AttractionItem from '@attraction/components/AttractionItem';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import { Text } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import dataAttraction from '@attraction/attraction.json';
import dataIndustry from '@attraction/industry.json';

const AttractionScreen: React.FC = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPressItem = (item: any) => {
    navigation.navigate('AttractionDetail', {
      attraction: item,
    });
  };

  const onPressMore = (target: string) => {
    navigation.navigate('MoreList', {
      target: target,
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <SpaceBetween>
          <SectionTitle>Destinasi Lokal</SectionTitle>
          <Text
            color={theme.colors.primary}
            onPress={() => onPressMore('attraction')}>
            Lihat selengkapnya
          </Text>
        </SpaceBetween>
        {dataAttraction.slice(0, 5).map((e, i) => (
          <>
            <AttractionItem
              key={e.title}
              thumbnailUri={e.thumbnailUri}
              title={e.title}
              description={e.description}
              onPress={() => onPressItem(e)}
            />
            {i !== 4 && <Separator width={'85%'} color={'lightgrey'} />}
          </>
        ))}
      </View>
      <View style={styles.section}>
        <SpaceBetween>
          <Text style={styles.sectionTitle}>Industri Kreatif</Text>
          <Text
            color={theme.colors.primary}
            onPress={() => onPressMore('industry')}>
            Lihat selengkapnya
          </Text>
        </SpaceBetween>
        {dataIndustry.slice(0, 5).map((e, i) => (
          <>
            <AttractionItem
              key={e.title}
              thumbnailUri={e.thumbnailUri}
              title={e.title}
              description={e.description}
              onPress={() => onPressItem(e)}
            />
            {i !== 4 && <Separator width={'85%'} color={'lightgrey'} />}
          </>
        ))}
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
