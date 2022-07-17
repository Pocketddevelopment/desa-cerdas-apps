import { updateAccountThunk } from '@authentication/models/thunks';
import Button from '@components/Button';
import Input from '@components/Input';
import UpdateAccountFormInterface from '@authentication/models/interfaces/requests/UpdateAccountRequest.interface';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';

const UpdateAccountScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { account, loading } = useAppSelector(
    (state: RootState) => state.authentication
  );

  // Form controls
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UpdateAccountFormInterface>({
    defaultValues: {
      Email: account?.Email,
      MobileNo: account?.MobileNo,
    },
  });

  const onPressUpdate = async (data: UpdateAccountFormInterface) => {
    data.CustomerID = account?.CustomerID!;
    await dispatch(updateAccountThunk(data))
      .unwrap()
      .then((response) => {
        Toast.show({
          type: 'standard',
          text1: response.ResponseMessage,
        });
        setTimeout(() => {
          navigation.goBack();
        }, 2000);
      })
      .catch((err) =>
        Toast.show({
          type: 'standard',
          text1: err.ResponseMessage,
        })
      );
  };

  return (
    <View style={styles.container}>
      <Controller
        name='Email'
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Email harus diisi',
          },
          pattern: {
            value:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            message: 'Pastikan Email Anda sesuai',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder='Email'
            onChangeText={onChange}
            value={value}
            errorMessage={errors?.Email?.message}
            keyboardType={'email-address'}
          />
        )}
      />
      <Controller
        name='MobileNo'
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Nomor telepon harus diisi',
          },
          pattern: {
            value: /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
            message: 'Pastikan Nomor telepon Anda sesuai',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder='Nomor Telepon'
            onChangeText={onChange}
            value={value}
            errorMessage={errors?.MobileNo?.message}
            keyboardType={'phone-pad'}
          />
        )}
      />
      <Button
        btnStyle={styles.btnUpdate}
        loading={loading.account}
        onPress={handleSubmit(onPressUpdate)}>
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
