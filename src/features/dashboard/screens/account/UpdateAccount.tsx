import Button from '@components/Button';
import Input from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const UpdateAccountScreen: React.FC = () => {
  const navigation = useNavigation();

  const onPressUpdate = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder='Alamat surel'
        defaultValue='bambang.sudrajat@gmail.com'
      />
      <Input placeholder='Nomor telepon genggam' defaultValue='08123456789' />
      <Button btnStyle={styles.btnUpdate} onPress={onPressUpdate}>
        Perbarui Data
      </Button>
    </View>
  );
};

export default UpdateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  btnUpdate: {
    marginTop: 30,
    width: '100%',
  },
});
