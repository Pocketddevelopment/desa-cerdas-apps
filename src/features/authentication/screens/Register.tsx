import { RootStackParamList } from '@@@/App';
import {
  RegisterFormStep1,
  RegisterFormStep2,
} from '@authentication/models/interfaces/requests/RegisterRequest.interface';
import { registerThunk } from '@authentication/models/thunks';
import Button from '@components/Button';
import Container from '@components/Container';
import Input from '@components/Input';
import Row from '@components/Row';
import SelectItemInterface from '@interfaces/SelectItem.interface';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import moment from 'moment';
import 'moment/locale/id';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
moment.locale('id');

const RegisterScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(
    (state: RootState) => state.authentication
  );
  const [dateList, setDateList] = useState<SelectItemInterface[]>([]);
  const [monthList, setMonthList] = useState<SelectItemInterface[]>([]);
  const [yearList, setYearList] = useState<SelectItemInterface[]>([]);

  const getYears = useMemo(() => {
    const currentYear = new Date().getFullYear(),
      years: SelectItemInterface[] = [];
    let startYear = currentYear - 102;
    let index = 0;
    while (startYear <= currentYear) {
      years.push({ label: startYear++, value: index++ });
    }
    return years;
  }, []);

  const getMonths = useMemo(() => {
    const months = moment().localeData().months();
    const monthSelections = months.map((e: string, i: number) => {
      return {
        value: i,
        label: e,
      };
    });
    setMonthList(monthSelections);
    return monthSelections;
  }, []);

  const getDates = useCallback((month?: number, year?: number) => {
    const selectedYear = year || new Date().getFullYear();
    const selectedMonth = month || '01';
    let index = 0;

    const daysInMonth = Array.from(
      { length: moment(`${selectedYear}-${selectedMonth}`).daysInMonth() },
      (x, i) => {
        return {
          label: moment().startOf('month').add(i, 'days').format('DD'),
          value: index++,
        };
      }
    );
    const selectedDate = Number.parseInt(getValues('DateOfBirth') || '0');
    // No date is present means its not valid date in month
    if (!daysInMonth[selectedDate]) {
      setValue(
        'DateOfBirth',
        daysInMonth[daysInMonth.length - 1].value.toString()
      );
    }
    setDateList(daysInMonth);
  }, []);

  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    setYearList(getYears);
    setMonthList(getMonths);
    getDates();
  }, [getYears, getMonths]);

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

  const onPressNext = async () => {
    if (step === 0) {
      setStep(step + 1);
    }
    if (step === 1) {
      const step1Form = getValues();
      const step2Form = getValues1();
      const DateOfBirth = `${
        yearList[Number.parseInt(step1Form.YearOfBirth)].label
      }-${moment()
        .startOf('years')
        .add(
          Number.parseInt(
            monthList[Number.parseInt(step1Form.MonthOfBirth)].value as string
          ),
          'months'
        )
        .format('MM')}-${
        dateList[Number.parseInt(step1Form.DateOfBirth)].label
      }`;
      step2Form.RegisterType = 'AndroidInput';
      let FirstName = '';
      let LastName = '';
      const names = step1Form.Name?.split(' ');
      if (names && names.length) {
        FirstName = names[0];
        LastName = names.slice(1, names.length).join(' ');
      }
      delete step1Form.Name;
      // @ts-expect-error
      delete step1Form.MonthOfBirth;
      // @ts-expect-error
      delete step1Form.YearOfBirth;
      delete step2Form.ConfirmPassword;
      const data = {
        ...step1Form,
        ...step2Form,
        FirstName,
        LastName,
        DateOfBirth: new Date(DateOfBirth).toISOString(),
      };
      await dispatch(registerThunk(data))
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
          <Row align='top'>
            <View style={{ flex: 1 }}>
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
                    placeholder='Tgl'
                    editable={false}
                    suffixIcon={'chevron-down'}
                    value={
                      value !== undefined
                        ? (dateList[Number.parseInt(value)].label as string)
                        : undefined
                    }
                    onPressSuffix={() =>
                      navigation.navigate('ModalSelector', {
                        title: 'Tanggal Lahir',
                        data: dateList,
                        initialSelectedIndex: value as unknown as number,
                        onSelectItem: (selectedItem: SelectItemInterface) => {
                          onChange(selectedItem.value);
                        },
                      })
                    }
                    errorMessage={errors?.DateOfBirth?.message}
                  />
                )}
              />
            </View>
            <View style={{ flex: 1.5, marginHorizontal: 10 }}>
              <Controller
                name='MonthOfBirth'
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Bulan lahir harus diisi',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder='Bln lahir'
                    editable={false}
                    suffixIcon={'chevron-down'}
                    value={
                      value !== undefined
                        ? (monthList[Number.parseInt(value)].label as string)
                        : undefined
                    }
                    onPressSuffix={() =>
                      navigation.navigate('ModalSelector', {
                        title: 'Tanggal Lahir',
                        data: monthList,
                        initialSelectedIndex: value as unknown as number,
                        onSelectItem: (selectedItem: SelectItemInterface) => {
                          getDates(
                            Number.parseInt(selectedItem.value as string) + 1,
                            Number.parseInt(
                              yearList[
                                Number.parseInt(getValues('YearOfBirth') || '0')
                              ].label.toString()
                            )
                          );
                          onChange(selectedItem.value);
                        },
                      })
                    }
                    errorMessage={errors?.MonthOfBirth?.message}
                  />
                )}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Controller
                name='YearOfBirth'
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Tahun lahir harus diisi',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder='Tahun'
                    editable={false}
                    suffixIcon={'chevron-down'}
                    value={
                      value !== undefined
                        ? yearList[Number.parseInt(value)].label.toString()
                        : undefined
                    }
                    onPressSuffix={() =>
                      navigation.navigate('ModalSelector', {
                        title: 'Tahun Lahir',
                        data: yearList,
                        initialSelectedIndex: value as unknown as number,
                        onSelectItem: (selectedItem: SelectItemInterface) => {
                          onChange(selectedItem.value);
                          getDates(
                            Number.parseInt(
                              monthList[
                                Number.parseInt(
                                  getValues('MonthOfBirth') || '0'
                                )
                              ].value as string
                            ) + 1,
                            Number.parseInt(
                              yearList[selectedItem.value as number]
                                .label as string
                            )
                          );
                        },
                      })
                    }
                    errorMessage={errors?.YearOfBirth?.message}
                  />
                )}
              />
            </View>
          </Row>
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
        loading={loading.account}
        onPress={
          step === 0 ? handleSubmit(onPressNext) : handleSubmit2(onPressNext)
        }>
        {step === 1 ? 'Buat Akun' : 'Lanjut'}
      </Button>
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
