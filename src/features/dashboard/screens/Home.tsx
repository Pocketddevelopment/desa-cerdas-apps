import Row from '@components/Row';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import { Text, Title } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import DeviceContants from '@constants/device';
import DistrictCard from '@dashboard/components/DistrictCard';
import NewsItem from '@dashboard/components/NewsItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, IconButton, useTheme } from 'react-native-paper';
import { DashboardStackParamList } from '..';

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.profileContainer,
          { backgroundColor: theme.colors.primary },
        ]}>
        <SpaceBetween>
          <Row>
            <Avatar.Text
              size={48}
              label='B'
              color={theme.colors.text}
              labelStyle={{ fontWeight: '700', fontSize: 20 }}
              style={{ backgroundColor: '#FFEBEB' }}
            />
            <View style={styles.profileDetail}>
              <Text color={theme.colors.background}>Selamat Datang,</Text>
              <Title color={theme.colors.background} style={styles.name}>
                Bambang Sudrajat
              </Title>
            </View>
          </Row>
          <IconButton
            icon={require('@assets/notification/bell.webp')}
            color={'white'}
            size={30}
            onPress={() => navigation.navigate('NotificationList')}
          />
        </SpaceBetween>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollBody}
        showsVerticalScrollIndicator={false}>
        <View style={styles.districtCardContainer}>
          <View
            style={[
              styles.upperAbsolute,
              { backgroundColor: theme.colors.primary },
            ]}
          />
          <DistrictCard />
        </View>
        <View style={styles.body}>
          <SectionTitle>Berita Terkini</SectionTitle>
          <NewsItem />
          <Separator width={'90%'} />
          <NewsItem />
          <Separator width={'90%'} />
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
    padding: 20,
    paddingHorizontal: 30,
    paddingRight: 20,
  },
  profileDetail: {
    marginLeft: 10,
  },
  scrollBody: {
    flexGrow: 1,
  },
  body: {
    paddingTop: 10,
    paddingHorizontal: 25,
  },
  upperAbsolute: {
    height: 40,
    width: DeviceContants.screenWidth,
  },
  name: { letterSpacing: 0.5 },
  districtCardContainer: {
    height: 200,
    alignItems: 'center',
  },
});
