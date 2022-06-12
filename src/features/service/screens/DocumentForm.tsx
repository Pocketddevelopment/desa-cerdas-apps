import Button from '@components/Button';
import Container from '@components/Container';
import TextInput from '@components/Input';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';

const DocumentFormScreen: React.FC = ({ navigation }: any) => {
  const onPressRequest = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
        <Container>
          <TextInput placeholder='Jenis Dokumen' suffixIcon='chevron-down' />
          <View style={{ width: '100%', marginTop: 10, marginBottom: 20 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
              Data-data yang diperlukan
            </Text>
            <TextInput placeholder='Jenis Dokumen' />
            <TextInput placeholder='Jenis Dokumen' suffixIcon='chevron-down' />
            <TextInput placeholder='Jenis Dokumen' />
            <TextInput placeholder='Jenis Dokumen' />
            <TextInput
              placeholder='Text Area'
              multiline={true}
              numberOfLines={5}
              textAlignVertical='top'
              style={{ minHeight: 150 }}
            />
          </View>
          <Button onPress={onPressRequest}>Cetak dan Unduh Dokumen</Button>
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default DocumentFormScreen;

// const style = StyleSheet.create({});
