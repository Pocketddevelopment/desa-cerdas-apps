import Button from '@components/Button';
import Container from '@components/Container';
import TextInput from '@components/Input';
import Row from '@components/Row';
import { Text, Title } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import DeviceContants from '@constants/device';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { IconButton, useTheme } from 'react-native-paper';

const DocumentFormScreen: React.FC = ({ navigation }: any) => {
  const theme = useTheme();
  const [documentTypeListVisible, setDocumentTypeListVisible] =
    useState<boolean>(false);
  const [documentTypes, setDocumentTypes] = useState([
    {
      selected: false,
      label: 'Surat Keterangan Domisili',
    },
    {
      selected: false,
      label: 'Surat Ijin Mengadakan Acara',
    },
    {
      selected: false,
      label: 'Surat Keterangan Pindah Datang',
    },
  ]);
  const [selectedDocumentTypes, setSelectedDocumentTypes] = useState<string>();

  const onPressRequest = () => {
    navigation.goBack();
  };

  const onPressDocumentTypeList = () => {
    setDocumentTypeListVisible(true);
  };

  const onSelectDocument = (index: number) => {
    documentTypes.forEach((e, i, a) => {
      a[i].selected = false;
    });
    documentTypes[index].selected = true;
    setSelectedDocumentTypes(documentTypes[index].label);
    setDocumentTypes([...documentTypes]);
    setDocumentTypeListVisible(false);
  };

  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
          <Container>
            <TextInput
              placeholder='Judul Laporan Keluhan'
              value={selectedDocumentTypes}
              suffixIcon='chevron-down'
              onPressSuffix={onPressDocumentTypeList}
            />
            <View style={{ width: '100%', marginTop: 5, marginBottom: 10 }}>
              <View style={{ marginBottom: 5 }}>
                <SectionTitle>Data-data yang diperlukan</SectionTitle>
              </View>
              <TextInput placeholder='NIK' />
              <TextInput placeholder='Nama Depan' />
              <TextInput placeholder='Nama Belakang' />
              {/* <TextInput
                placeholder='Deskripsi...'
                multiline={true}
                numberOfLines={5}
                textAlignVertical='top'
                style={{ minHeight: 150 }}
              /> */}
            </View>
            <Button onPress={onPressRequest} btnStyle={{ width: '100%' }}>
              Cetak dan Unduh Dokumen
            </Button>
          </Container>
        </KeyboardAvoidingView>
      </ScrollView>
      <Modal
        isVisible={documentTypeListVisible}
        style={{ margin: 0, borderTopEndRadius: 10 }}
        onDismiss={() => {
          setDocumentTypeListVisible(!documentTypeListVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Row style={styles.header}>
              <View style={{ flex: 9 }}>
                <Title size={16}>Jenis Dokumen</Title>
              </View>
              <View style={{ flex: 1 }}>
                <IconButton
                  icon={'close'}
                  onPress={() => setDocumentTypeListVisible(false)}
                />
              </View>
            </Row>

            {documentTypes.map((e, i) => {
              return (
                <TouchableOpacity
                  delayPressIn={80}
                  key={e.label}
                  onPress={() => onSelectDocument(i)}>
                  <Row style={styles.selectItem}>
                    <IconButton
                      color={theme.colors.primary}
                      icon={e.selected ? 'check-circle' : 'circle-outline'}
                      style={styles.selectionIcon}
                    />
                    <Text>{e.label}</Text>
                  </Row>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.modal} />
      </Modal>
    </>
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
