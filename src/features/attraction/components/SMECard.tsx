import { Text, Title } from '@components/typography';
import DeviceContants from '@constants/device';
import onPressInterface from '@interfaces/Press.interface';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';

type SMECardProps = {
  thumbnailUri: string;
  name: string;
  phone: string;
  seller: string;
  onPress: onPressInterface;
};

const SMECard = ({
  thumbnailUri,
  name,
  phone,
  seller,
  onPress,
}: SMECardProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity delayPressIn={80} style={styles.card} onPress={onPress}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: thumbnailUri,
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.content}>
        <View
          style={{
            flex: 1,
          }}>
          <Title color={theme.colors.primary} size={16}>
            {name}
          </Title>
          <Text size={15} style={styles.phone}>
            {phone}
          </Text>
        </View>
        <Text>{seller}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SMECard;

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    backgroundColor: 'white',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginHorizontal: 5,
    overflow: 'hidden',
    marginBottom: 15,
    width: DeviceContants.screenWidth / 2 - 20,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  imgContainer: { justifyContent: 'flex-start' },
  img: {
    width: '100%',
    height: 120,
  },
  phone: {
    marginBottom: 5,
  },
});
