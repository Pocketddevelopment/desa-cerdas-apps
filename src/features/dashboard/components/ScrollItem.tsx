import onPressInterface from '@@@/src/interfaces/Press.interface';
import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { List } from 'react-native-paper';

interface ScrollItemProps {
  icon: string;
  title: string;
  onPress: onPressInterface;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const ScrollItem = ({
  icon,
  title,
  onPress,
  style,
  textStyle,
}: ScrollItemProps) => {
  return (
    <List.Item
      style={[styles.container, style]}
      title={title}
      titleStyle={textStyle}
      left={() => <List.Icon color={'red'} icon={icon} />}
      onPress={onPress}
    />
  );
};

export default ScrollItem;

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
});
