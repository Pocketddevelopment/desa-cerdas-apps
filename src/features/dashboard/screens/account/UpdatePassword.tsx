import Button from '@components/Button';
import Input from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const UpdatePasswordScreen: React.FC = () => {
  const navigation = useNavigation();

  const onPressUpdate = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Input placeholder='Kata sandi lama' />
      <Input placeholder='Kata sandi baru' />
      <Input placeholder='Konfirmasi kata sandi' />
      <Button style={styles.btnUpdate} onPress={onPressUpdate}>
        Ganti Kata Sandi
      </Button>
    </View>
  );
};

export default UpdatePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  btnUpdate: {
    marginTop: 30,
  },
});
