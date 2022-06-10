import onPressInterface from '@interfaces/Press.interface';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

interface ButtonShortcutProps {
  uri: string;
  title: string;
  onPress: onPressInterface;
}

const ButtonShortcut = ({ uri, title, onPress }: ButtonShortcutProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <View style={styles.btnCard}>
        <Image
          style={styles.iconImage}
          source={{
            uri: uri,
          }}
        />
      </View>
      <Text>{title}</Text>
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
    elevation: 10,
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
    height: 40,
    width: 40,
    marginBottom: 5,
  },
  iconImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
