import { updateDeviceThunk } from '@authentication/models/thunks';
import Row from '@components/Row';
import SpaceBetween from '@components/SpaceBetween';
import { Text, Title } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import DeviceContants from '@constants/device';
import DistrictCard from '@dashboard/components/DistrictCard';
import WeatherCard from '@dashboard/components/WeatherCard';
import NewsList from '@news/screens/NewsList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import { getInitialName } from '@utils/transformer';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, IconButton, useTheme } from 'react-native-paper';
import { DashboardStackParamList } from '..';

const HomeScreen: React.FC<NativeStackScreenProps<DashboardStackParamList>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();

  const { account } = useAppSelector(
    (state: RootState) => state.authentication
  );

  useEffect(() => {
    dispatch(updateDeviceThunk());
  }, []);

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
              label={getInitialName(account?.FirstName)}
              color={theme.colors.text}
              labelStyle={{ fontWeight: '700', fontSize: 20 }}
              style={{ backgroundColor: '#FFEBEB' }}
            />
            <View style={styles.profileDetail}>
              <Text color={theme.colors.background}>Selamat Datang,</Text>
              <Title
                color={theme.colors.background}
                style={styles.name}
                numberOfLines={1}>
                {account?.FirstName} {account?.LastName}
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
        <WeatherCard />
        <View style={styles.body}>
          <SectionTitle>Berita Terkini</SectionTitle>
          <NewsList />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 64,
  },
  body: {
    paddingTop: 10,
    paddingHorizontal: 25,
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
