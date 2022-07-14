import Button from '@components/Button';
import Container from '@components/Container';
import { default as Input } from '@components/Input';
import SectionTitle from '@components/typography/SectionTitle';
import DeviceContants from '@constants/device';
import { DashboardStackParamList } from '@dashboard/index';
import SelectItemInterface from '@interfaces/SelectItem.interface';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import DocumentFormInputEnum from '@service/models/interfaces/enums/DocumentFormInput.enums';
import {
  getDocumentFormFormatThunk,
  requestDocumentThunk,
} from '@service/models/thunks';
import { getDocumentFormList } from '@service/utils/formatter';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import React, { useEffect, useState } from 'react';
import { Controller, useFieldArray, useForm, useWatch } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const DocumentFormScreen: React.FC<
  NativeStackScreenProps<DashboardStackParamList, 'DocumentForm'>
> = ({ navigation }: any) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { loading, documentFormat } = useAppSelector(
    (state: RootState) => state.service
  );

  const [documentTypes, setDocumentTypes] = useState<
    (SelectItemInterface & { data: string })[]
  >([]);
  const [documentBody, setDocumentBody] = useState<string>();
  const [documentBodyForm, setDocumentBodyForm] = useState<any>([]);

  useEffect(() => {
    if (documentFormat.length <= 0) {
      dispatch(getDocumentFormFormatThunk());
    } else {
      setDocumentTypes(getDocumentFormList(documentFormat));
    }
  }, [documentFormat]);

  // Form controls
  /** Step 1 Form control */
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();

  const { fields, append, replace } = useFieldArray({
    control,
    name: 'DocumentForm',
  });

  useEffect(() => {
    console.log(JSON.stringify(errors));
  }, [errors]);

  const selectedDocumentType = useWatch({
    control,
    name: 'AdministrationFormatID',
  });

  useEffect(() => {
    replace([]);
    setError('DocumentForm', {});
    const newDocumentBodyForm: any[] = [];
    if (selectedDocumentType) {
      const formString = documentBody?.split('|');
      formString?.map((e, i) => {
        const parts = e.split('#');
        const name = parts[0];
        const inputType = parts[1];
        append({
          name,
          inputType,
        });
      });
      setDocumentBodyForm(newDocumentBodyForm);
    }
  }, [selectedDocumentType]);

  const onPressRequest = async (data: any) => {
    const { AdministrationFormatID, ...rest } = data;
    const restLength = Object.keys(rest).length;
    const payloadValue = Object.keys(rest)
      .map(
        (e: string, i: number) =>
          `${e}#${rest[e]}${i !== restLength - 1 ? '|' : ''}`
      )
      .join('');
    const payload = {
      AdministrationFormatID,
      Value: payloadValue,
    };
    await dispatch(requestDocumentThunk(payload))
      .unwrap()
      .then((response) => {
        console.log('response', response);
        Toast.show({
          type: 'standard',
          text1: response.ResponseMessage,
        });
        setTimeout(() => {
          navigation.goBack();
        }, 1000);
      })
      .catch((err) =>
        Toast.show({
          type: 'standard',
          text1: err.ResponseMessage,
        })
      );
  };

  const renderFormBody = () => {
    return fields.map((e: Record<string, string>, index) => {
      return (
        <Controller
          key={e.id}
          control={control}
          name={`DocumentForm[${index}].${e.name}`}
          rules={{
            required: {
              value: true,
              message: `${e.name} harus diisi`,
            },
          }}
          render={({ field: { onChange, value } }) => {
            switch (e.inputType) {
              case DocumentFormInputEnum.TEXTBOX:
                return (
                  <Input
                    placeholder={e.name}
                    onChangeText={onChange}
                    value={value}
                    errorMessage={
                      errors?.DocumentForm?.[index]?.[e.name]
                        ?.message as unknown as string
                    }
                  />
                );
              case DocumentFormInputEnum.TEXTAREA:
                return (
                  <Input
                    placeholder={e.name}
                    onChangeText={onChange}
                    value={value}
                    multiline={true}
                    numberOfLines={5}
                    textAlignVertical='top'
                    style={{ minHeight: 150 }}
                    errorMessage={
                      errors?.DocumentForm?.[index]?.[e.name]
                        ?.message as unknown as string
                    }
                  />
                );
              default:
                return <></>;
            }
          }}
        />
      );
    });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
        <Container>
          <Controller
            name='AdministrationFormatID'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Jenis dokumen harus diisi',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Jenis Dokumen'
                editable={false}
                suffixIcon={'chevron-down'}
                value={
                  documentTypes.find((e) => e.value === value)?.label as string
                }
                onPressSuffix={() =>
                  navigation.navigate('ModalSelector', {
                    loading: documentTypes.length === 0,
                    title: 'Jenis Dokumen',
                    data: documentTypes,
                    initialSelectedIndex: documentTypes.findIndex(
                      (e) => e.value === value
                    ),
                    onSelectItem: (selectedItem: SelectItemInterface) => {
                      onChange(selectedItem.value);
                      setDocumentBody(
                        documentTypes.find(
                          (e) => e.value === selectedItem.value
                        )!.data
                      );
                    },
                  })
                }
              />
            )}
          />
          {documentTypes && documentBody && documentBodyForm && (
            <>
              <View style={{ width: '100%', marginTop: 5, marginBottom: 10 }}>
                <View style={{ marginBottom: 5 }}>
                  <SectionTitle>Data-data yang diperlukan</SectionTitle>
                </View>
                {renderFormBody()}
              </View>
              <Button
                loading={loading.requestForm}
                onPress={handleSubmit(onPressRequest)}
                btnStyle={{ width: '100%' }}>
                Cetak dan Unduh Dokumen
              </Button>
            </>
          )}
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default DocumentFormScreen;

const styles = StyleSheet.create({
  selectItem: {
    padding: 15,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  modal: {
    backgroundColor: 'white',
    width: '100%',
    maxHeight: DeviceContants.screenHeight / 3,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  header: {
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  selectionIcon: { margin: 0, marginRight: 10, height: 25 },
});
