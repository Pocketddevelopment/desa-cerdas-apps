import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { List, Text } from 'react-native-paper';

interface ScrollItemProps {
  icon: string;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const ScrollItem = ({ icon, title, style, textStyle }: ScrollItemProps) => {
  return (
    <List.Item
      style={[styles.container, style]}
      title={title}
      titleStyle={textStyle}
      left={() => <List.Icon color={'red'} icon={icon} />}
    />
  );
};

export default ScrollItem;

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
});
