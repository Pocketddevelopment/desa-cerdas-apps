import Row from '@components/Row';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Caption, Text, Title, useTheme } from 'react-native-paper';

type PlacemanCardProps = {
  thumbnailUri: string;
  name: string;
  position: string;
  phone: string;
  idNumber: string;
};

const PlacemanCard = ({
  thumbnailUri,
  name,
  position,
  phone,
  idNumber,
}: PlacemanCardProps) => {
  const theme = useTheme();
  return (
    <View style={styles.card}>
      <Row>
        <Image source={{ uri: thumbnailUri }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Title style={[styles.name, { color: theme.colors.primary }]}>
              {name?.toUpperCase()}
            </Title>
            <Text>{position}</Text>
            <Text>{phone}</Text>
          </View>
          <Caption>{idNumber}</Caption>
        </View>
      </Row>
    </View>
  );
};

export default PlacemanCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding: 10,
    minWidth: 300,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 120,
    resizeMode: 'cover',
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
});
