import Row from '@components/Row';
import { Text, Title } from '@components/typography';
import onPressInterface from '@interfaces/Press.interface';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';

type AttractionItemProps = {
  thumbnailUri: string;
  title: string;
  description: string;
  onPress: onPressInterface;
};

const AttractionItem = ({
  thumbnailUri,
  title,
  description,
  onPress,
}: AttractionItemProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Row align='top'>
        <Image
          style={styles.image}
          source={{
            uri: thumbnailUri,
          }}
        />
        <View style={{ flex: 1 }}>
          <Title color={theme.colors.primary}>{title}</Title>
          <Text numberOfLines={2}>{description}</Text>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default AttractionItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
