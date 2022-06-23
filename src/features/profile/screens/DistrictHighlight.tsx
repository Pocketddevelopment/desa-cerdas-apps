import Row from '@components/Row';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import { Text } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import { DashboardStackParamList } from '@dashboard/index';
import EventItem from '@profile/components/EventItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import ReportItem from '../../report/components/ReportItem';

const DistrictHighlightScreen: React.FC = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <SpaceBetween>
        <SectionTitle>Event Kegiatan</SectionTitle>
        <Text
          color={theme.colors.primary}
          onPress={() => navigation.navigate('EventList')}>
          Lihat selengkapnya
        </Text>
      </SpaceBetween>
      <EventItem
        thumbnailUri='https://www.panggungharjo.desa.id/wp-content/uploads/2016/06/DSC0394-e1466498426643-660x400.jpg'
        date='Selasa, 21 Juni 2016'
        title='Memajukan Ekonomi Desa Melalui BUMDes'
        description='Empat tujuan pendirian Bumdes itu sudah seharusnya melekat pada visi-misi sebuah pemerintahan desa. Ke empat tujuan itu seharusnya menjadi sikap dan dedikasi semua kepala desa dan perangkatnya. Sejumlah BUMdes yang sukses seperti BUMDes Minggirsari di Kabupaten Blitar atau BUMDes Panggungharjo di Kabupaten Bantul adalah contoh bagaimana pemerintahan desa memiliki visi-misi memajukan ekonomi desa mereka. BUMDes Panggungharjo berhasil membangun usaha pengelolaan sampah dan terus mengembangkan usahanya dengan menggandeng mitra-mitra strategis yang mereka miliki.
        BUMDes Minggirsari di Blitar beberapa kali terpilih sebagai BUMDes terbaik nasional karena mereka mengelola usaha secara professional, baik itu simpan-pinjam maupun pengembangan usaha tani yang kini sudah ber-omset ratusan juta per bulan. BUMDes Panggungharjo baru-baru ini bekerja sama dengan sebuah perusahaan swasta dalam usaha pengolahan minyak jelantah untuk dijadikan sumber energi baru. BUMDes Panggungharjo dalam hal ini menjadi pensuplai minyak jelantah yang dikumpulkan dari warga desa.'
      />
      <Separator width={'85%'} />
      <EventItem
        thumbnailUri='http://pulosari-jombang.web.id/assets/files/artikel/kecil_1508244312IMG20171005122358.jpg'
        date='Selasa, 21 Juni 2016'
        title='PEMANFAATAN DANA DESA UNTUK KEGIATAN BUMDes TAHUN 2018'
        description='Ini Kegiatan BUMDes 2018 Yang Dapat Didukung Oleh Dana Desa 2018
        BUM Des Bersama – Pengembangan produk unggulan Desa atau kawasan perdesaan, BUM Desa atau BUM Desa Bersama, embung air desa, dan sarana olahraga Desa sesuai dengan kewenangan Desa merupakan kegiatan prioritas penggunaan Dana Desa 2018. Sarana Olah Raga Desa merupakan salah satu unit usaha yang berada dibawah BUM Desa atau BUM Desa Bersama.
        Selain pengelolaan Sarana Olah Raga Desa, BUM Des atau BUM Desa Bersama juga dapat mengelola kegiatan sebagi berikut:
        1. Dukungan permodalan dan pengelolaan usaha ekonomi produktif;
        2. Distribusi dan pemasaran bagi usaha ekonomi pertanian berskala produktif dan usaha ekonomi lainnya yang difokuskan kepada pembentukan dan pengembangan produk unggulan desa dan/atau produk unggulan kawasan perdesaan;
        3. Pembentukan usaha ekonomi warga/kelompok, koperasi dan/atau lembaga ekonomi masyarakat Desa lainnya melalui akses permodalan;
        4. Perluasan/ekspansi usaha BUM Desa dan/atau BUM Desa Bersama melalui penyertaan modal, pengelolaan produksi, distribusi dan pemasaran bagi usaha ekonomi pertanian berskala produktif dan usaha ekonomi lainnya yang difokuskan kepada pembentukan dan pengembangan produk unggulan desa dan/atau produk unggulan kawasan perdesaan;
        5. Perluasan/ekspansi lapangan kerja untuk pemenuhan kebutuhan hidup bagi masyarakat Desa'
      />
      <Separator width={'85%'} />
      <EventItem
        thumbnailUri='https://kwadungan.ngawikab.id/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-01-at-09.39.59-1080x675.jpeg'
        date='Jumat, 1 Juli 2021'
        title='MUSYAWARAH DESA PENDIRIAN BUMDES DAN PEMBENTUKAN UNIT USAHA BUMDES'
        description='Kamis (01/07) bertempat di kantor Desa Kwadungan diselenggarakan musdes pendirian BUMDes dan pembentukan BUMDes. Musdes dihadiri oleh Camat Kwadungan beserta kasi pemerintahannya, Kepala Desa Kwadungan beserta perangkatnya dan ketua BPD beserta anggotanya. Musdes dimulai pukul 09.00 WIB.
        Badan Usaha Milik Desa atau BUMDes Merupakan usaha desa yang dikelola oleh Pemerintah Desa dan berbadan hukum. Pemerintah Desa dapat mendirikan Badan Usaha Milik Desa sesuai dengan kebutuhan dan potensi Desa. Pembentukan BUMDes ditetapkan dengan Peraturan Desa. Kepengurusan Badan Usaha Milik Desa terdiri dari Pemerintah Desa dan masyarakat desa setempat.
        Camat Kwadungan menyampaikan dalam sambutannya BUMDes dibentukan berdasarkan kebijakan Kemendes. Dengan terbentuknya BUMDes dimasing-masing desa diharapkan dapat terbentuk BUMDesma (BUMDes bersama). Dengan begitu desa tidak bergantung pada dana yang bersumber dari pemerintah pusat. Harapan dibentuknya BUMDes yaitu adanya target pembentukan BUMDes meliputi nama BUMDes, pengurus BUMDes dan jenis kegiatan usahanya. BUMDes dibentuk dengan menggali potensi desa, misalnya dibidang pertanian. Bupati Ngawi melalui camat juga menyampaikan ingin membangun BUMDes berdasar dari pembentukan BUMDes dimasing – masing desa. Dengan usaha yaitu berupa pembelian padi hasil panen dengan modal sebesar 5 Miliar rupiah.'
      />
      <Separator width={'85%'} />
      <EventItem
        thumbnailUri='http://pasirsalam.sideka.id/wp-content/uploads/sites/5695/2018/10/image005-2-678x381.jpg'
        date='Rabu, 22 Oktober 2021'
        title='Mengintip Kegiatan Bumdes Cahaya Abadi Desa Pasirsalam'
        description='Mengintip Kegiatan Bumdes Cahaya Abadi Desa Pasirsalam</div>
        <div class="des-kegiatan">Bumdes Cahaya Abadi bergerak dibidang perdagangan, khususnya sembako. Bumdes Cahaya Abadi menyediakan berbagai kebutuhan sehari-hari mulaidari beras, telur, minyakgoreng, tepung terigu dll. Selain itu Bumdes Cahaya Abadi menjadi agen BRILINK, Jadi masyarakat di Desa Pasirsalam bisa melakukan transaksi perbankan seperti transper, mengambil uang, bayarl istrik dan beli pulsa.
Pengurus Bumdes Cahaya Abadi berjumlah 3 Orang, Rifki Zulfikar Sebagai Direktur, Dian Pertiwi Sebagai Bendahara dan SitiRisma Sebagai Sekretaris.
Fasilitas yang tersedia di Bumdes Cahaya Abadi masih terbatas, seperti ruangan yang masih menumpang di Kantor Desa, namun itu tidak dijadikan kendala. Semua pengurus tetap semangat dalam menjalankan aktifitasnya dan bekerjasama dengan baik dengan pihak desa. Walaupun begitu transaksi yang dilakukan sudah menggunakan cash register dan sudah dilengkapi Kamera pengintai CCTV.'
      />
      <Separator width={'85%'} />
      <EventItem
        thumbnailUri='https://lenterajambi.id/site/file/blog/63de18be991c075ce96a8eedb4e6ae98.jpg'
        date='Kamis, 03 Juli 2020'
        title='Bangkitkan Ekonomi Desa Dimasa Pandemi: BumDes Cahaya Berkah Adakan Pelatihan'
        description='Bangkitkan Ekonomi Desa Dimasa Pandemi: BumDes Cahaya Berkah Adakan Pelatihan</div>
        <div class="des-kegiatan">Badan Usaha Milik Desa (Bumdes Desa Pematang Buluh) Kecamatan Betara Kabupaten Tanjung Jabung Barat telah melakukan gebrakan kegiatan bagi para pengurus Bumdesnya bertempat di Aula Kantor Kepala Desa Pematang Buluh. Rabu (01/07).
Kegiatan pelatihan Bumdes mandiri ini bertujuan untuk membangkitkan kembali semangat gerakan ekonomi masyarakat desa, dimana saat ini kondisinya sangat lesu dan terpuruk akibat adanya bencana global pandemi virus Corona.
Pelatihan Bumdes "cahaya berkah" ini, bertujuan untuk membangun kembali semangat gerakan ekonomi masyarakat desa pematang buluh melalui kelembagaan bumdes.
"Ya, benar sekali Bumdes "Cahaya Berkah" telah melaksanakan kegiatan pelatihan peningkatan kapasitas bagi pengurus Bumdes Desa Pematang Buluh, ujar ILHAMNUR selaku Kepala Desa Pematang Buluh, Ilhamnur juga menjelaskan bahwa kegiatan ini dilaksanakan pada hari Rabu dan kamis (1 s/d 2/07)". Ujar kades.
"Kades Pematang Buluh (red;ilhamnur) menambahkan kepada reporter LenteraJambi.id untuk pelatihnya kita minta dukungan pelatih dari Tenaga Ahli Pengembangan Ekonomi Desa oleh Bapak Jonnedi, sedangkan Pemberdayaan Masyarakat Desa oleh Bapak Eko Waskito dari Kabupaten, dan dibantu dengan pendamping kecamatan dan desa, terangnya".
Kegiatan positif Bumdes ini bertujuan juga untuk membangkitkan kembali semangat dan harapan lembaga Bumdes cahaya berkah disaat pandemi covid-19.'
      />

      <Row style={{ marginTop: 10 }}>
        <SectionTitle>Laporan Perkembangan</SectionTitle>
      </Row>
      <ReportItem
        format='xlsx'
        date='Senin, 12 Maret 2022'
        title='Pengembangan sentra usaha tahu bulan Februari'
      />
      <Separator color='lightgrey' />
      <ReportItem
        format='pdf'
        date='Senin, 11 Maret 2022'
        title='Rencana pembangunan sentra usaha tahu bulan Februari'
      />
      <Separator color='lightgrey' />
      <ReportItem
        format='xlsx'
        date='Senin, 10 Maret 2022'
        title='Anggaran Pendapatan Belanja Desa 2021'
      />
    </ScrollView>
  );
};

export default DistrictHighlightScreen;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 15,
  },
  btnMaps: {
    margin: 5,
    width: 'auto',
  },
});
