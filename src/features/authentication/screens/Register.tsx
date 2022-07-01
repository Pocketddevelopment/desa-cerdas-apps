import Button from '@components/Button';
import Container from '@components/Container';
import Input from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/id';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';
moment.locale('id');

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState<number>(0);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);

  const onDismissSingle = React.useCallback(() => {
    setShowDatePicker(false);
  }, [showDatePicker]);

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      setShowDatePicker(false);
      setBirthdate(params.date);
    },
    [setShowDatePicker, setBirthdate]
  );

  const onPressNext = () => {
    setStep(step + 1);
    if (step === 1) {
      navigation.goBack();
    }
  };

  return (
    <Container>
      {step === 0 && (
        <View style={styles.form}>
          <Input placeholder='NIK e-KTP' />
          <Input placeholder='Nama lengkap sesuai e-KTP' />
          <Input
            placeholder='Tanggal Lahir'
            editable={false}
            suffixIcon={'chevron-right'}
            value={birthdate ? moment(birthdate).format('DD MMMM YYYY') : ''}
            onPressSuffix={() => setShowDatePicker(true)}
          />
        </View>
      )}
      {step === 1 && (
        <View style={styles.form}>
          <Input placeholder='Email' />
          <Input placeholder='Nomor Telepon' />
          <Input type='password' placeholder='Password' />
          <Input type='password' placeholder='Konfirmasi Password' />
        </View>
      )}
      <Button btnStyle={{ width: '100%' }} onPress={onPressNext}>
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
        // validRange={{
        //   startDate: new Date(2021, 1, 2),  // optional
        //   endDate: new Date(), // optional
        //   disabledDates: [new Date()] // optional
        // }}
        // onChange={} // same props as onConfirm but triggered without confirmed by user
        // saveLabel="Save" // optional
        // uppercase={false} // optional, default is true
        // label="Select date" // optional
        // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
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
