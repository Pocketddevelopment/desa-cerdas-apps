import DeviceContants from '@constants/device';
import onPressInterface from '@interfaces/Press.interface';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Title, useTheme } from 'react-native-paper';

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
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{
          uri: thumbnailUri,
        }}
        style={styles.img}
      />
      <View style={styles.content}>
        <Title style={[styles.title, { color: theme.colors.primary }]}>
          {name}
        </Title>
        <Text>{phone}</Text>
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
    justifyContent: 'center',
    marginHorizontal: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  content: {
    padding: 10,
  },
  img: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    center: true,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: undefined,
    marginBottom: 5,
  },
});
