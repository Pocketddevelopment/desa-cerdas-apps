import { Text, Title } from '@components/typography';
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
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{
          uri: thumbnailUri,
        }}
        style={styles.img}
      />
      <View style={styles.content}>
        <Title color={theme.colors.primary} size={16}>
          {name}
        </Title>
        <Text size={15} style={styles.phone}>
          {phone}
        </Text>
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
    marginBottom: 15,
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
  phone: {
    marginBottom: 5,
  },
});
