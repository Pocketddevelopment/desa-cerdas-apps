import Button from '@components/Button';
import Row from '@components/Row';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import { Text, Title } from '@components/typography';
import DeviceContants from '@constants/device';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import { getInitialName } from '@utils/transformer';
import moment from 'moment';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, useTheme } from 'react-native-paper';
import { DashboardStackParamList } from '..';

const AccountCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const theme = useTheme();

  const { account } = useAppSelector(
    (state: RootState) => state.authentication
  );

  const onPressUpdate = () => {
    navigation.navigate('UpdateAccount');
  };

  return (
    <View style={styles.card}>
      <Row style={{ alignItems: 'flex-start' }}>
        <Avatar.Text
          size={48}
          label={getInitialName(account?.FirstName)}
          color={theme.colors.text}
          labelStyle={{ fontWeight: '700', fontSize: 20 }}
          style={{ backgroundColor: '#FFEBEB', marginRight: 10, marginTop: 5 }}
        />
        <View>
          <Title>{`${account?.FirstName} ${account?.LastName}`}</Title>
          <Text>{account?.Email}</Text>
          <Text>{account?.MobileNo}</Text>
        </View>
      </Row>
      <Separator style={{ marginVertical: 10 }} />
      <SpaceBetween>
        <View style={{ flex: 1 }}>
          <Text size={16}>NIK: {account?.CustomerID}</Text>
          <Text size={16}>
            Tgl. Lahir: {moment(account?.DateOfBirth).format('DD-MM-YYYY')}
          </Text>
        </View>
        <Button style={styles.btnUpdate} onPress={onPressUpdate}>
          Perbarui
        </Button>
      </SpaceBetween>
    </View>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    paddingHorizontal: 10,
    width: DeviceContants.screenWidth - 50,
    paddingVertical: 10,
  },
  avatar: {
    marginRight: 10,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  btnUpdate: { width: 'auto' },
});
