import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface ButtonShortcutProps {
  uri: string;
  title: string;
}

const ButtonShortcut = ({ uri, title }: ButtonShortcutProps) => {
  return (
    <View style={styles.btnContainer}>
      <View style={styles.btnCard}>
        <Image
          style={styles.iconImage}
          source={{
            uri: uri,
          }}
        />
      </View>
      <Text>{title}</Text>
    </View>
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
