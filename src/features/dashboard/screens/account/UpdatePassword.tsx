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
      <Input placeholder='Password lama' suffixIcon='eye' />
      <Input placeholder='Password baru' suffixIcon='eye' />
      <Input placeholder='Konfirmasi password baru' suffixIcon='eye' />
      <Button btnStyle={styles.btnUpdate} onPress={onPressUpdate}>
        Ganti Password
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
    width: '100%',
  },
});
