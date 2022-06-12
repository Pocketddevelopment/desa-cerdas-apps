import Button from '@components/Button';
import Container from '@components/Container';
import TextInput from '@components/Input';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const ComplaintFormScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPressCreate = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <TextInput placeholder='Jenis Dokumen' maxLength={60} counter />
      <TextInput
        placeholder='Deskripsi keluhan anda...'
        multiline={true}
        numberOfLines={5}
        textAlignVertical='top'
        style={{ minHeight: 150 }}
        counter
        maxLength={280}
      />
      <View style={styles.attachmentSection}>
        <Text style={styles.sectionTitle}>Foto Pendukung</Text>
        <ScrollView
          horizontal
          contentContainerStyle={styles.attachmentThumbnailContainer}>
          <Image
            source={{
              uri: 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
            }}
            style={styles.attachmentThumbnail}
          />
          <Image
            source={{
              uri: 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
            }}
            style={styles.attachmentThumbnail}
          />
          <Image
            source={{
              uri: 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
            }}
            style={styles.attachmentThumbnail}
          />
        </ScrollView>
        <Button mode='outlined' primary>
          Tambah Foto (Maks. 5 foto, total 10MB)
        </Button>
      </View>
      <Button onPress={onPressCreate}>Buat Laporan</Button>
    </Container>
  );
};

export default ComplaintFormScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: 'bold',
  },
  attachmentSection: {
    marginVertical: 15,
    marginBottom: 30,
    width: '100%',
  },
  attachmentThumbnail: {
    height: 70,
    width: 70,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  attachmentThumbnailContainer: {
    marginVertical: 10,
  },
});
