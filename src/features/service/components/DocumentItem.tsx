import Row from '@components/Row';
import { Caption, Text, Title } from '@components/typography';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import onPressInterface from '@interfaces/Press.interface';

interface ReportItemProps {
  format: string;
  date: string;
  title: string;
  onDownload: onPressInterface;
}

const DocumentItem = ({ format, date, title, onDownload }: ReportItemProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      delayPressIn={80}
      style={styles.container}
      onPress={onDownload}>
      <Row>
        <View style={{ flex: 1.5 }}>
          <Title
            size={14}
            style={[styles.fileFormat, { color: theme.colors.primary }]}>
            {format && format.toUpperCase()}
          </Title>
        </View>
        <View style={{ flex: 8.5 }}>
          <Caption size={11}>{date}</Caption>
          <Text numberOfLines={1}>{title}</Text>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default DocumentItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  title: {
    fontSize: 14,
    lineHeight: undefined,
    letterSpacing: 0,
  },
  fileFormat: {
    textAlign: 'left',
  },
});
