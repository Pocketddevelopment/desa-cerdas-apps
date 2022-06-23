import Container from '@components/Container';
import { Text, Title } from '@components/typography';
import React from 'react';
import { ScrollView } from 'react-native';

const PrivacyPolicyScreen: React.FC<any> = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title size={42} style={{ marginBottom: 20 }}>
          Kebijakan Privasi
        </Title>
        <Text size={16}>
          KETENTUAN PENGGUNAAN mulai dari 29 Oktober 2021 Kami berterima kasih
          atas kepercayaan Anda terhadap Layanan Mohon luangkan waktu Anda untuk
          membaca keseluruhan Ketentuan Penggunaan ini. Ketentuan Penggunaan ini
          merupakan bagian yang tidak terpisahkan dari Ketentuan Penggunaan
          Aplikasi . Jika Anda menggunakan Layanan , maka Anda akan dianggap
          telah membaca dan menyetujui Ketentuan Penggunaan ini. Oleh karenanya,
          jika Anda tidak menyetujui sebagian atau seluruh bagian dari Ketentuan
          Penggunaan ini, mohon agar tidak melanjutkan penggunaan Layanan .
          ISTILAH UMUM Kecuali didefinisikan secara khusus dibawah ini dan pada
          bagian lain dari Ketentuan Penggunaan ini, istilah-istilah dalam huruf
          besar yang digunakan dalam Ketentuan Penggunaan ini harus ditafsirkan
          sesuai dengan Ketentuan Penggunaan . Gerai adalah restoran, rumah
          makan, warung toko, gerobak dan/atau bentuk fisik lainnya yang
          terdaftar dalam Aplikasi yang dimiliki dan dikelola oleh Mitra Usaha.
          adalah salah satu layanan yang tersedia di dalam Aplikasi , dimana
          Anda bisa melakukan Transaksi di Gerai. Mitra Usaha adalah pihak yang
          memiliki dan mengelola Gerai dimana bertindak sebagai penyedia Produk.
          Mitra Pengemudi adalah Penyedia Layanan pihak ketiga independen yang
          setuju menjadi mitra Kami, bekerja sama dengan Kami dengan skema
          kemitraan, dan bukan karyawan, agen atau perwakilan Kami. Produk
          adalah makanan dan/atau minuman yang Anda pesan melalui Layanan di
          Gerai yang Anda pilih. Transaksi adalah pemesanan, pembelian dan
          pengantaran atau pengambilan atas Produk melalui Layanan.
        </Text>
      </ScrollView>
    </Container>
  );
};

export default PrivacyPolicyScreen;
