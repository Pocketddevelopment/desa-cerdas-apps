import Button from '@components/Button';
import Container from '@components/Container';
import TextInput from '@components/Input';
import SectionTitle from '@components/typography/SectionTitle';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

const DocumentFormScreen: React.FC = ({ navigation }: any) => {
  const onPressRequest = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
        <Container>
          <TextInput placeholder='Jenis Dokumen' suffixIcon='chevron-down' />
          <View style={{ width: '100%', marginTop: 5 }}>
            <View style={{ marginBottom: 5 }}>
              <SectionTitle>Data-data yang diperlukan</SectionTitle>
            </View>
            <TextInput placeholder='Jenis Dokumen' />
            <TextInput placeholder='Jenis Dokumen' suffixIcon='chevron-down' />
            <TextInput placeholder='Jenis Dokumen' />
            <TextInput placeholder='Jenis Dokumen' />
            <TextInput
              placeholder='Deskripsi'
              multiline={true}
              numberOfLines={5}
              textAlignVertical='top'
              style={{ minHeight: 150 }}
            />
          </View>
          <Button onPress={onPressRequest} btnStyle={{ width: '100%' }}>
            Cetak dan Unduh Dokumen
          </Button>
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default DocumentFormScreen;

// const style = StyleSheet.create({});
