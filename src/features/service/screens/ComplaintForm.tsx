import Button from '@components/Button';
import Container from '@components/Container';
import TextInput from '@components/Input';
import SectionTitle from '@components/typography/SectionTitle';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const ComplaintFormScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const theme = useTheme();

  const onPressCreate = () => {
    Toast.show({
      type: 'standard',
      text1: 'Laporan Anda berhasil tersimpan',
      onHide: () => {
        navigation.goBack();
      },
      visibilityTime: 2000,
    });
  };

  return (
    <>
      <Container>
        <TextInput
          placeholder='Judul Laporan Keluhan'
          maxLength={30}
          counter
          counterColor='error'
        />
        <TextInput
          placeholder='Deskripsi keluhan Anda...'
          multiline={true}
          numberOfLines={5}
          textAlignVertical='top'
          style={{ minHeight: 150, maxHeight: 200, paddingVertical: 10 }}
          counter
          counterColor='error'
          maxLength={280}
        />
        <View style={styles.attachmentSection}>
          <SectionTitle>Foto Pendukung</SectionTitle>
          <ScrollView
            horizontal
            contentContainerStyle={styles.attachmentThumbnailContainer}>
            {[0, 1, 2].map((e, i) => {
              return (
                <View key={i}>
                  <Image
                    source={{
                      uri: 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
                    }}
                    style={styles.attachmentThumbnail}
                  />
                  <IconButton
                    size={18}
                    icon={'close-circle'}
                    color={theme.colors.primary}
                    style={styles.btnAttachmentCancel}
                  />
                </View>
              );
            })}
          </ScrollView>
          <Button mode='outlined' primary>
            Tambah Foto (Maks. 5 foto, total 10MB)
          </Button>
        </View>
        <Button onPress={onPressCreate} btnStyle={{ width: '100%' }}>
          Buat Laporan
        </Button>
      </Container>
    </>
  );
};

export default ComplaintFormScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: 'bold',
  },
  attachmentSection: {
    marginVertical: 5,
    marginBottom: 120,
    width: '100%',
  },
  attachmentThumbnail: {
    height: 70,
    width: 70,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  btnAttachmentCancel: {
    position: 'absolute',
    top: -4,
    right: 2,
    zIndex: 1,
  },
  attachmentThumbnailContainer: {
    marginVertical: 10,
  },
});
