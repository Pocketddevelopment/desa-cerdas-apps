import {
  RegisterFormStep1,
  RegisterFormStep2,
} from '@authentication/models/interfaces/requests/RegisterRequest.interface';
import { registerThunk } from '@authentication/models/thunks';
import Button from '@components/Button';
import Container from '@components/Container';
import Input from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '@store/hooks';
import moment from 'moment';
import 'moment/locale/id';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';
import Toast from 'react-native-toast-message';
moment.locale('id');

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [step, setStep] = useState<number>(0);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);

  // Form controls
  /** Step 1 Form control */
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    trigger,
    getValues,
  } = useForm<RegisterFormStep1>();

  const {
    handleSubmit: handleSubmit2,
    control: control2,
    formState: { errors: errors2 },
    getValues: getValues1,
  } = useForm<RegisterFormStep2>();

  const onDismissSingle = React.useCallback(() => {
    setShowDatePicker(false);
  }, [showDatePicker]);

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      setShowDatePicker(false);
      setValue('DateOfBirth', params.date);
      trigger('DateOfBirth');
    },
    [setShowDatePicker, setBirthdate]
  );

  const onPressNext = async () => {
    if (step === 0) {
      setStep(step + 1);
    }
    if (step === 1) {
      const step1Form = getValues();
      const step2Form = getValues1();
      const names: string[] = step1Form?.Name?.split(' ') as string[];
      const FirstName = names[0];
      names.splice(0, 1);
      const LastName = names.join(' ');
      step1Form.FirstName = FirstName;
      step1Form.LastName = LastName;
      delete step1Form.Name;
      delete step2Form.ConfirmPassword;
      step2Form.RegisterType = 'AndroidInput';
      const data = {
        ...step1Form,
        ...step2Form,
        DateOfBirth: moment(step1Form.DateOfBirth).format('YYYY-MM-DD'),
      };
      await dispatch(registerThunk(data))
        .unwrap()
        .then((response) => {
          Toast.show({
            type: 'standard',
            text1: response.ResponseMessage,
          });
          navigation.goBack();
        })
        .catch((err) =>
          Toast.show({
            type: 'standard',
            text1: err.ResponseMessage,
          })
        );
    }
  };

  return (
    <Container>
      {step === 0 && (
        <View style={styles.form}>
          <Controller
            name='NIK'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'NIK harus diisi',
              },
              pattern: {
                value: /^\d{16}$/,
                message: 'Pastikan NIK Anda sesuai',
              },
              maxLength: 16,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='NIK e-KTP'
                onChangeText={onChange}
                value={value}
                maxLength={16}
                keyboardType={'numeric'}
                errorMessage={errors?.NIK?.message}
              />
            )}
          />
          <Controller
            name='Name'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Nama harus diisi',
              },
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: 'Pastikan Nama Anda sesuai',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Nama lengkap sesuai e-KTP'
                onChangeText={onChange}
                value={value}
                errorMessage={errors?.Name?.message}
              />
            )}
          />
          <Controller
            name='DateOfBirth'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Tanggal lahir harus diisi',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Tanggal Lahir'
                editable={false}
                suffixIcon={'chevron-right'}
                value={value ? moment(value).format('DD MMMM YYYY') : ''}
                onPressSuffix={() => setShowDatePicker(true)}
                errorMessage={errors?.DateOfBirth?.message}
              />
            )}
          />
        </View>
      )}
      {step === 1 && (
        <View style={styles.form}>
          <Controller
            name='Email'
            control={control2}
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
                errorMessage={errors2?.Email?.message}
                keyboardType={'email-address'}
              />
            )}
          />
          <Controller
            name='MobileNo'
            control={control2}
            rules={{
              required: {
                value: true,
                message: 'Nomor telepon harus diisi',
              },
              pattern: {
                value:
                  /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
                message: 'Pastikan Nomor telepon Anda sesuai',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Nomor Telepon'
                onChangeText={onChange}
                value={value}
                errorMessage={errors2?.MobileNo?.message}
                keyboardType={'phone-pad'}
              />
            )}
          />
          <Controller
            name='Password'
            control={control2}
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
                placeholder='Password'
                onChangeText={onChange}
                value={value}
                errorMessage={errors2?.Password?.message}
              />
            )}
          />
          <Controller
            name='ConfirmPassword'
            control={control2}
            rules={{
              required: {
                value: true,
                message: 'Konfirmasi password harus diisi',
              },
              validate: (confirmPassword?: string) =>
                confirmPassword === getValues1('Password')
                  ? true
                  : 'Konfirmasi password harus sama dengan password',
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                type='password'
                placeholder='Konfirmasi Password'
                onChangeText={onChange}
                value={value}
                errorMessage={errors2?.ConfirmPassword?.message}
              />
            )}
          />
        </View>
      )}
      <Button
        btnStyle={{ width: '100%' }}
        onPress={
          step === 0 ? handleSubmit(onPressNext) : handleSubmit2(onPressNext)
        }>
        {step === 1 ? 'Buat Akun' : 'Lanjut'}
      </Button>

      <DatePickerModal
        locale='id'
        mode='single'
        animationType='slide'
        label='Pilih Tanggal'
        saveLabel='Simpan'
        visible={showDatePicker}
        onDismiss={onDismissSingle}
        date={birthdate || new Date()}
        onConfirm={onConfirmSingle}
      />
    </Container>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  form: {
    width: '100%',
    marginBottom: 30,
  },
});
