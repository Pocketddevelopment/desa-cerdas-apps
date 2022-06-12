import DeviceContants from '@constants/device';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text, Title, useTheme } from 'react-native-paper';

const SMECard = () => {
  const theme = useTheme();
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
        }}
        style={styles.img}
      />
      <View style={styles.content}>
        <Title style={[styles.title, { color: theme.colors.primary }]}>
          Kulit Lumpia Barokah
        </Title>
        <Text>08123456789</Text>
        <Text>H. SLamet Barokah</Text>
      </View>
    </View>
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
