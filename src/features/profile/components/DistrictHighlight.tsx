import Separator from '@components/Separator';
import { Caption } from '@components/typography';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ReportItem from '../../report/components/ReportItem';
import EventItem from './EventItem';
import Toast from 'react-native-toast-message';
import RNFS from 'react-native-fs';

const DistrictHighlight = () => {
  const onPressItem = (title: string) => {
    RNFS.downloadFile({
      fromUrl:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      toFile: `${RNFS.DocumentDirectoryPath}/${title}`,
    })
      .promise.then((r) => {
        console.log(`${RNFS.DocumentDirectoryPath}/${title}.pdf`);
        Toast.show({
          type: 'standard',
          text1: `Berhasil mengunduh ${title}`,
        });
      })
      .catch((err) => {
        console.log(err);
        Toast.show({
          type: 'standard',
          text1: `Gagal mengunduh ${title}`,
        });
      });
  };
  return (
    <View style={styles.card}>
      <View style={styles.section}>
        <Caption size={11}>Event Kegiatan</Caption>
        <EventItem
          thumbnailUri='http://13.250.44.36:8002/bumdes/1.jpg'
          date='Selasa, 21 Juni 2016'
          title='Memajukan Ekonomi Desa Melalui BUMDes'
          description='Empat tujuan pendirian Bumdes itu sudah seharusnya melekat pada visi-misi sebuah pemerintahan desa. Ke empat tujuan itu seharusnya menjadi sikap dan dedikasi semua kepala desa dan perangkatnya. Sejumlah BUMdes yang sukses seperti BUMDes Minggirsari di Kabupaten Blitar atau BUMDes Panggungharjo di Kabupaten Bantul adalah contoh bagaimana pemerintahan desa memiliki visi-misi memajukan ekonomi desa mereka. BUMDes Panggungharjo berhasil membangun usaha pengelolaan sampah dan terus mengembangkan usahanya dengan menggandeng mitra-mitra strategis yang mereka miliki.
        BUMDes Minggirsari di Blitar beberapa kali terpilih sebagai BUMDes terbaik nasional karena mereka mengelola usaha secara professional, baik itu simpan-pinjam maupun pengembangan usaha tani yang kini sudah ber-omset ratusan juta per bulan. BUMDes Panggungharjo baru-baru ini bekerja sama dengan sebuah perusahaan swasta dalam usaha pengolahan minyak jelantah untuk dijadikan sumber energi baru. BUMDes Panggungharjo dalam hal ini menjadi pensuplai minyak jelantah yang dikumpulkan dari warga desa.'
        />
        <Separator width={'85%'} />
        <EventItem
          thumbnailUri='http://13.250.44.36:8002/bumdes/2.jpg'
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
          thumbnailUri='http://13.250.44.36:8002/bumdes/3.jpg'
          date='Jumat, 1 Juli 2021'
          title='MUSYAWARAH DESA PENDIRIAN BUMDES DAN PEMBENTUKAN UNIT USAHA BUMDES'
          description='Kamis (01/07) bertempat di kantor Desa Kwadungan diselenggarakan musdes pendirian BUMDes dan pembentukan BUMDes. Musdes dihadiri oleh Camat Kwadungan beserta kasi pemerintahannya, Kepala Desa Kwadungan beserta perangkatnya dan ketua BPD beserta anggotanya. Musdes dimulai pukul 09.00 WIB.
        Badan Usaha Milik Desa atau BUMDes Merupakan usaha desa yang dikelola oleh Pemerintah Desa dan berbadan hukum. Pemerintah Desa dapat mendirikan Badan Usaha Milik Desa sesuai dengan kebutuhan dan potensi Desa. Pembentukan BUMDes ditetapkan dengan Peraturan Desa. Kepengurusan Badan Usaha Milik Desa terdiri dari Pemerintah Desa dan masyarakat desa setempat.
        Camat Kwadungan menyampaikan dalam sambutannya BUMDes dibentukan berdasarkan kebijakan Kemendes. Dengan terbentuknya BUMDes dimasing-masing desa diharapkan dapat terbentuk BUMDesma (BUMDes bersama). Dengan begitu desa tidak bergantung pada dana yang bersumber dari pemerintah pusat. Harapan dibentuknya BUMDes yaitu adanya target pembentukan BUMDes meliputi nama BUMDes, pengurus BUMDes dan jenis kegiatan usahanya. BUMDes dibentuk dengan menggali potensi desa, misalnya dibidang pertanian. Bupati Ngawi melalui camat juga menyampaikan ingin membangun BUMDes berdasar dari pembentukan BUMDes dimasing – masing desa. Dengan usaha yaitu berupa pembelian padi hasil panen dengan modal sebesar 5 Miliar rupiah.'
        />
      </View>
      <View style={styles.section}>
        <Caption size={11}>Laporan Perkembangan</Caption>
        <ReportItem
          format='xlsx'
          date='Senin, 12 Maret 2022'
          title='Pengembangan sentra usaha tahu bulan Februari'
          onDownload={() =>
            onPressItem('Pengembangan sentra usaha tahu bulan Februari')
          }
        />
        <Separator width={'90%'} />
        <ReportItem
          format='pdf'
          date='Senin, 11 Maret 2022'
          title='Rencana pembangunan sentra usaha tahu bulan Februari'
          onDownload={() =>
            onPressItem('Pengembangan sentra usaha tahu bulan Februari')
          }
        />
        <Separator width={'90%'} />
        <ReportItem
          format='xlsx'
          date='Senin, 10 Maret 2022'
          title='Anggaran Pendapatan Belanja Desa 2021'
          onDownload={() =>
            onPressItem('Pengembangan sentra usaha tahu bulan Februari')
          }
        />
      </View>
    </View>
  );
};

export default DistrictHighlight;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  section: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
