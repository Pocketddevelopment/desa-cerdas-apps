import onPressInterface from '@@@/src/interfaces/Press.interface';
import Row from '@components/Row';
import { Text } from '@components/typography';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { List } from 'react-native-paper';

interface ScrollItemProps {
  icon: ImageSourcePropType;
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
    <TouchableOpacity
      delayPressIn={80}
      style={[styles.container, style]}
      onPress={onPress}>
      <Row>
        <Image style={styles.icon} source={icon} />
        <Text size={16} style={[styles.text, textStyle]}>
          {title}
        </Text>
      </Row>
    </TouchableOpacity>
  );
};

export default ScrollItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 15,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 15,
  },
  text: {
    letterSpacing: 0.3,
  },
});
