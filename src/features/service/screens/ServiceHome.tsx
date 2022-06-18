import Container from '@components/Container';
import { Text } from '@components/typography';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import ServiceCard from '../components/ServiceCard';

const ServiceScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPressCard = (
    target: 'DocumentForm' | 'Complaint' | 'DocumentHistory'
  ) => {
    navigation.navigate(target as keyof DashboardStackParamList);
  };

  return (
    <Container color='primary'>
      <Text style={styles.head}>Pilih layanan yang anda butuhkan</Text>
      <ServiceCard
        title='PERMOHONAN SURAT / DOKUMEN DARI APARAT DESA'
        description='Surat Keterangan Domisili, Surat Ijin Mengadakan Acara, Surat Keterangan
        Pindah Datang, dll'
        onPress={() => onPressCard('DocumentForm')}
      />
      <ServiceCard
        title='LAPORAN KELUHAN WARGA'
        description='Sampaikan saran ataupun keluhan anda agar segera dapat ditangani oleh pihak desa terkait'
        onPress={() => onPressCard('Complaint')}
      />
      <Text
        style={styles.history}
        size={18}
        onPress={() => onPressCard('DocumentHistory')}>
        Lihat Riwayat Surat / Dokumen
      </Text>
    </Container>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  head: {
    marginVertical: 40,
    color: 'white',
  },
  history: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});
