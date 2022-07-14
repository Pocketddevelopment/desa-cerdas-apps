import Button from '@components/Button';
import Container from '@components/Container';
import Input from '@components/Input';
import SectionTitle from '@components/typography/SectionTitle';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ComplaintForm from '@service/models/interfaces/requests/ComplaintFormRequest.interface';
import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import AttachmentImage from '@service/components/AttachmentImage';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  createComplaintThunk,
  getComplaintListThunk,
} from '@service/models/thunks';
import { RootState } from '@store/store';

interface AttachmentImage {
  type: string;
  data: string;
}

const ComplaintFormScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state: RootState) => state.service);
  const [attachmentImages, setAttachmentImages] = useState<AttachmentImage[]>(
    []
  );

  // Form controls
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ComplaintForm>();

  const extractImage = useCallback((images: Asset[]) => {
    const imagesData: AttachmentImage[] = [];
    let sizeExceeded = false;

    for (let i = 0; i < images.length; i++) {
      // Filesize in bytes
      if (images[i].fileSize || 0 <= 5000000) {
        imagesData.push({
          type: images[i].type || 'image/png',
          data: images[i].base64 || '',
        });
      } else {
        sizeExceeded = true;
      }
    }

    if (sizeExceeded) {
      Toast.show({
        type: 'standard',
        text1: 'Ada foto yang anda pilih melebihi batas 5MB',
      });
    }
    return imagesData;
  }, []);

  const onAddImage = async () => {
    const image = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 5 - attachmentImages.length,
      includeBase64: true,
      quality: 0.5,
    });
    const images = extractImage(image.assets!);
    const newAttachmentImages = attachmentImages.concat(images).slice(0, 5);
    setAttachmentImages(newAttachmentImages);
  };

  const onPressRemove = (index: number) => {
    const newAttachmentImages = attachmentImages.filter(
      (e, i) => i !== index && e
    );
    setAttachmentImages(newAttachmentImages);
  };

  const onPressCreate = async (values: ComplaintForm) => {
    dispatch(
      createComplaintThunk({
        ...values,
        listImage: attachmentImages.map((e) => {
          return {
            image: e.data,
          };
        }),
      })
    )
      .unwrap()
      .then(() => {
        Toast.show({
          type: 'standard',
          text1: 'Laporan Anda berhasil tersimpan',
          onHide: () => {
            navigation.goBack();
          },
          visibilityTime: 2000,
        });
        dispatch(getComplaintListThunk(1));
        setTimeout(() => {
          navigation.goBack();
        }, 2000);
      });
  };

  return (
    <>
      <Container>
        <Controller
          name='subject'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Judul laporan keluhan harus diisi',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Judul Laporan Keluhan'
              maxLength={30}
              onChangeText={onChange}
              value={value}
              errorMessage={errors?.subject?.message}
              counter
              counterColor='error'
            />
          )}
        />

        <Controller
          name='description'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Deskripsi keluhan harus diisi',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Deskripsi keluhan Anda...'
              multiline={true}
              numberOfLines={5}
              textAlignVertical='top'
              style={{ minHeight: 150, maxHeight: 200, paddingVertical: 10 }}
              counter
              counterColor='error'
              maxLength={280}
              onChangeText={onChange}
              value={value}
              errorMessage={errors?.subject?.message}
            />
          )}
        />
        <View style={styles.attachmentSection}>
          {attachmentImages.length > 0 && (
            <SectionTitle>Foto Pendukung</SectionTitle>
          )}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.attachmentThumbnailContainer}>
            {attachmentImages.map((e, i) => {
              return (
                <AttachmentImage
                  key={i}
                  type={e.type}
                  data={e.data}
                  onPressRemove={() => onPressRemove(i)}
                />
              );
            })}
          </ScrollView>
          {attachmentImages.length < 5 && (
            <Button mode='outlined' primary onPress={onAddImage}>
              Tambah Foto (Maks. 5 foto, total 10MB)
            </Button>
          )}
        </View>
        {attachmentImages.length > 0 && (
          <Button
            onPress={handleSubmit(onPressCreate)}
            btnStyle={{ width: '100%' }}
            loading={loading.createComplaint}>
            Buat Laporan
          </Button>
        )}
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
  attachmentThumbnailContainer: {
    marginVertical: 10,
  },
});
