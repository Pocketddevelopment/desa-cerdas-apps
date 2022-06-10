import Row from '@components/Row';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import DeviceContants from '@constants/device';
import DistrictCard from '@dashboard/components/DistrictCard';
import NewsItem from '@dashboard/components/NewsItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, IconButton, Text, Title } from 'react-native-paper';
import { DashboardStackParamList } from '..';

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <SpaceBetween>
          <Row>
            <Avatar.Image
              size={48}
              source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}
            />
            <View style={styles.profileDetail}>
              <Text>Selamat Datang,</Text>
              <Title>Bambang Sudrajat</Title>
            </View>
          </Row>
          <IconButton
            icon={'bell'}
            color={'white'}
            size={20}
            onPress={() => navigation.navigate('NotificationList')}
          />
        </SpaceBetween>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollBody}
        showsVerticalScrollIndicator={false}>
        <View style={styles.districtCardContainer}>
          <View style={styles.upperAbsolute} />
          <DistrictCard />
        </View>
        <View style={styles.body}>
          <Title>Berita Terkini</Title>
          <NewsItem />
          <Separator />
          <NewsItem />
          <Separator />
          <NewsItem />
          <Separator />
          <NewsItem />
          <Separator />
          <NewsItem />
          <Separator />
          <NewsItem />
          <Separator />
          <NewsItem />
          <Separator />
          <NewsItem />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    backgroundColor: 'red',
    padding: 20,
    paddingHorizontal: 40,
  },
  profileDetail: {
    marginLeft: 10,
  },
  scrollBody: {
    flexGrow: 1,
  },
  body: {
    paddingHorizontal: 10,
  },
  upperAbsolute: {
    height: 40,
    width: DeviceContants.screenWidth,
    backgroundColor: 'red',
  },
  districtCardContainer: {
    height: 200,
    alignItems: 'center',
  },
});
