import Row from '@components/Row';
import SpaceBetween from '@components/SpaceBetween';
import { Caption, Text } from '@components/typography';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Avatar, useTheme } from 'react-native-paper';

type CommentCardProps = {
  thumbnailUri?: string;
  content: string;
  date: string;
  name: string;
  medium: string;
  isSelf?: boolean;
};

const CommentCard = ({
  thumbnailUri,
  content,
  date,
  name,
  medium,
  isSelf = false,
}: CommentCardProps) => {
  const theme = useTheme();

  const ContentElement = (
    <View style={{ flex: 1 }}>
      <Text size={16}>{content}</Text>
    </View>
  );

  const ImageElement = (
    <Image
      source={{
        uri: thumbnailUri,
      }}
      style={[
        styles.image,
        { marginRight: isSelf ? 0 : 10, marginLeft: isSelf ? 10 : 0 },
      ]}
    />
  );

  const AvatarElement = (
    <Avatar.Text
      size={36}
      label='B'
      color={theme.colors.text}
      labelStyle={{ fontWeight: '700', fontSize: 20 }}
      style={{ backgroundColor: '#FFEBEB' }}
    />
  );

  const getLayout = () => {
    const RowTag = isSelf ? SpaceBetween : Row;

    function getElementsOrder() {
      if (isSelf) {
        return [ContentElement, AvatarElement];
      } else {
        return [ImageElement, ContentElement];
      }
    }

    return <RowTag style={styles.content}>{getElementsOrder()}</RowTag>;
  };

  return (
    <View
      style={[styles.card, { backgroundColor: isSelf ? '#FFF8E0' : 'white' }]}>
      {getLayout()}
      <View style={styles.footer}>
        <Caption size={14} color={theme.colors.primary}>
          {name}
        </Caption>
        <Caption>
          {date} {`${isSelf ? `via ${medium}` : ''}`}
        </Caption>
      </View>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding: 8,
    width: 'auto',
    marginBottom: 15,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  footer: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
  content: {
    alignItems: 'flex-start',
  },
});
