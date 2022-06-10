import Row from '@components/Row';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption, Title, useTheme } from 'react-native-paper';

interface ReportItemProps {
  date: string;
  title: string;
}

const ReportItem = ({ date, title }: ReportItemProps) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Row>
        <Title style={[styles.fileFormat, { color: theme.colors.primary }]}>
          XLSX
        </Title>
        <View style={{ flex: 1 }}>
          <Caption>{date}</Caption>
          <Title style={styles.title} numberOfLines={1}>
            {title}
          </Title>
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
  },
  fileFormat: {
    fontSize: 14,
    textAlign: 'center',
    marginRight: 15,
  },
});
