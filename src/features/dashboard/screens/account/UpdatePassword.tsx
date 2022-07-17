import UpdatePasswordThunkPayloadInterface from '@authentication/models/interfaces/requests/UpdatePasswordThunkPayload.interface';
import { updatePasswordThunk } from '@authentication/models/thunks';
import Button from '@components/Button';
import Input from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';

const UpdatePasswordScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector(
    (state: RootState) => state.authentication
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<UpdatePasswordThunkPayloadInterface>();

  const onPressUpdate = async (values: UpdatePasswordThunkPayloadInterface) => {
    await dispatch(updatePasswordThunk(values))
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
        name='oldPassword'
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Password lama harus diisi',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder='Password lama'
            onChangeText={onChange}
            value={value}
            maxLength={32}
            keyboardType={'default'}
            type={'password'}
            errorMessage={errors?.oldPassword?.message}
          />
        )}
      />
      <Controller
        name='newPassword'
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Password harus diisi',
          },
          minLength: {
            value: 8,
            message: 'Minimal panjang password 8 karakter',
          },
          maxLength: {
            value: 32,
            message: 'Maksimal panjang password 32 karakter',
          },
          pattern: {
            value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,32}$/,
            message: 'Password harus terdiri dari huruf dan angka',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            type='password'
            placeholder='Password baru'
            onChangeText={onChange}
            value={value}
            errorMessage={errors?.newPassword?.message}
          />
        )}
      />
      <Controller
        name='newPasswordConfirmation'
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Konfirmasi password harus diisi',
          },
          validate: (confirmPassword?: string) =>
            confirmPassword === getValues('newPassword')
              ? true
              : 'Konfirmasi password harus sama dengan password',
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            type='password'
            placeholder='Konfirmasi password baru'
            onChangeText={onChange}
            value={value}
            errorMessage={errors?.newPasswordConfirmation?.message}
          />
        )}
      />
      <Button
        loading={loading.password}
        btnStyle={styles.btnUpdate}
        onPress={handleSubmit(onPressUpdate)}>
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
