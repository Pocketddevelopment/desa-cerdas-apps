import { Text } from '@components/typography';
import onPressInterface from '@interfaces/Press.interface';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

interface ButtonShortcutProps {
  icon: ImageSourcePropType;
  title: string;
  onPress: onPressInterface;
}

const ButtonShortcut = ({ icon, title, onPress }: ButtonShortcutProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <View style={styles.btnCard}>
        <Image style={styles.iconImage} source={icon} />
      </View>
      <Text size={11}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonShortcut;

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
  },
  btnCard: {
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
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 45,
    marginBottom: 5,
  },
  iconImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});
