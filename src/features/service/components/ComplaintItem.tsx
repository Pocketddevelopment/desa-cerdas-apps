import Row from '@components/Row';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';
import { DashboardStackParamList } from '@dashboard/index';
import SpaceBetween from '@components/SpaceBetween';
import { Caption, Text, Title } from '@components/typography';

type ComplaintItemProps = {
  id: string;
  date: string;
  thumbnailUri: string;
  title: string;
  description: string;
  count: number;
  resolved?: boolean;
};

const ComplaintItem = ({
  id,
  date,
  thumbnailUri,
  title,
  description,
  count,
  resolved,
}: ComplaintItemProps) => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPress = () => {
    const data = {
      id,
      date,
      images: [{ ImageUrl: thumbnailUri }],
      title,
      description,
    };
    navigation.navigate('ComplaintDetail', {
      ...data,
    });
  };

  return (
    <TouchableOpacity delayPressIn={80} onPress={onPress}>
      <Row style={styles.container}>
        <View>
          <Image
            source={{
              uri: thumbnailUri,
            }}
            style={styles.image}
          />
          {resolved && (
            <Image
              source={require('@assets/check.webp')}
              style={styles.btnAttachmentCancel}
            />
          )}
        </View>

        <View style={{ flex: 1 }}>
          <SpaceBetween style={{ marginBottom: 3 }}>
            <Caption>{date}</Caption>
            <Caption color={theme.colors.primary}>({count} respon)</Caption>
          </SpaceBetween>
          <Title
            numberOfLines={1}
            style={[styles.title, { color: theme.colors.primary }]}>
            {title}
          </Title>
          <Text numberOfLines={1}>{description}</Text>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default ComplaintItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    lineHeight: undefined,
    fontSize: 16,
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  btnAttachmentCancel: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 3,
    right: 12,
    zIndex: 1,
  },
});
