import Row from '@components/Row';
import { Caption, Text, Title } from '@components/typography';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

interface ReportItemProps {
  format: string;
  date: string;
  title: string;
}

const ReportItem = ({ format, date, title }: ReportItemProps) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default ReportItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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
