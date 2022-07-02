import Separator from '@components/Separator';
import NewsItem from '@dashboard/components/NewsItem';
import { DashboardStackParamList } from '@dashboard/index';
import EventItem from '@profile/components/EventItem';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

type EventListProps = {
  navigation: NativeStackNavigationProp<DashboardStackParamList, any>;
  route: RouteProp<any>;
};

const EventListScreen: React.FC<EventListProps> = ({ navigation, route }) => {
  const onPressItem = () => {
    navigation.navigate('AttractionDetail');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
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
      <Separator width={'85%'} />
      <EventItem
        thumbnailUri='http://13.250.44.36:8002/bumdes/4.jpg'
        date='Rabu, 22 Oktober 2021'
        title='Mengintip Kegiatan Bumdes Cahaya Abadi Desa Pasirsalam'
        description='Mengintip Kegiatan Bumdes Cahaya Abadi Desa Pasirsalam</div>
        <div class="des-kegiatan">Bumdes Cahaya Abadi bergerak dibidang perdagangan, khususnya sembako. Bumdes Cahaya Abadi menyediakan berbagai kebutuhan sehari-hari mulaidari beras, telur, minyakgoreng, tepung terigu dll. Selain itu Bumdes Cahaya Abadi menjadi agen BRILINK, Jadi masyarakat di Desa Pasirsalam bisa melakukan transaksi perbankan seperti transper, mengambil uang, bayarl istrik dan beli pulsa.
Pengurus Bumdes Cahaya Abadi berjumlah 3 Orang, Rifki Zulfikar Sebagai Direktur, Dian Pertiwi Sebagai Bendahara dan SitiRisma Sebagai Sekretaris.
Fasilitas yang tersedia di Bumdes Cahaya Abadi masih terbatas, seperti ruangan yang masih menumpang di Kantor Desa, namun itu tidak dijadikan kendala. Semua pengurus tetap semangat dalam menjalankan aktifitasnya dan bekerjasama dengan baik dengan pihak desa. Walaupun begitu transaksi yang dilakukan sudah menggunakan cash register dan sudah dilengkapi Kamera pengintai CCTV.'
      />
      <Separator width={'85%'} />
      <EventItem
        thumbnailUri='http://13.250.44.36:8002/bumdes/5.jpg'
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
      <Separator width={'85%'} />
      <EventItem
        thumbnailUri='http://13.250.44.36:8002/bumdes/6.jpg'
        date='Senin, 13 April 2019'
        title='Badan Usaha Milik Desa (BUMDESA) Muara Basung Melaksanakan Kegiatan Gebyar BUMDES'
        description='Badan Usaha Milik Desa (BUMDESA) Muara Basung Melaksanakan Kegiatan Gebyar BUMDES, Rabu 10 April 2019  Di Balai Pertemuan Kampung baru  Dusun III Sialang  Muda
        Kegiatan ini merupakan kegiatan yang secara reguler dilaksanakan oleh BUMDesa Kujang dalam rangka mempertanggungjawabkan Kegiatan serta anggaran sebagai bentuk transparansi kepada Pemerintah Desa beserta nasabah BUMDES Muara Basung selama 1 Tahun Anggaran berjalan.
        Kegiatan ini dihadiri oleh Camat Pinggir TOHARUDIN, SH, M.Si yang hadir bersama Kasi Pemberdayaan Masyarakat Dan Desa SARI ARIFIN, A.Md., Dinas pemberdayaan masyarakat desa kab.Bengkalis, Kapolsek Pinggir, Kabid P2M Dinas pemberdayaan masyarakat desa kab.Bengkalis ERDILA, Kepala Desa Muara Basung AHYAR MUKMIN, serta salah satu perwakilan dari Bank Riau dan Direktur Badan usaha milik Desa MUKHLIS.'
      />
      <Separator width={'85%'} />
      <EventItem
        thumbnailUri='http://13.250.44.36:8002/bumdes/7.jpg'
        date='Senin, 22 Oktober 2019'
        title='MERAJUT KARYA DENGAN DANA DESA MELALUI BUMDES'
        description='BUM Des Bersama – Pengembangan produk unggulan Desa atau kawasan perdesaan, BUM Desa atau BUM Desa Bersama, embung air desa, dan sarana olahraga Desa sesuai dengan kewenangan Desa merupakan kegiatan prioritas penggunaan Dana Desa 2018. Sarana Olah Raga Desa merupakan salah satu unit usaha yang berada dibawah BUM Desa atau BUM Desa Bersama.'
      />
      <Separator width={'85%'} />
      <EventItem
        thumbnailUri='http://13.250.44.36:8002/bumdes/8.jpg'
        date='Senin, 14 November 2020'
        title='Pemdes dan Masyarakat Diminta Dorong BUMDes'
        description='Masyarakat dan pemerintah desa diminta terus mendorong perkembangan Badan Usaha Milik Desa (BUMDes) dengan memanfaatkan berbagai potensi dan usaha ekonomi yang ada di desanya masing-masing.
        Hal itu disampaikan Kepala Dinas Sosial, Pemberdayaan Masyarakat dan Desa (Dinsospermasdes) Kabupaten Banyumas, Kartiman mendorong saat kegiatan diskusi Keserasian Sosial, di Desa Sunyalangu, Kecamatan Karanglewas, Kamis (12/12). Kartiman mengatakan setiap desa pasti mempunyai potensi yang bisa dikembangkan sebagai peluang usaha BUMDes.
        “Misalnya di sini (Sunyalangu, red) sudah ada pasar desa, maka manfaatkan dengan baik. Karena pasar adalah pertemuan penjual dan pembeli. Silakan warga yang mempunyai apa dan ingin apa saling bertukar dan menghidupkan pasar yang ada di sini,” jelasnya.
        Dari pasar desa ini, kata Kartiman, usaha perdagangan di tingkat lokal bisa hidup. Peluang perparkiran hingga usaha distribusi barang juga bisa terus hidup. Dengan inilah, maka pendapatan masyarakat desa dan asli desa bisa muncul dan bertambah.
        Di tengah potensi wisata alam di Desa Sunyalangu, Kartiman mencontohkan salah satu desa wisata yang sukses di Banyumas yaitu Karangsalam, Baturraden. Melalui inovasi kuliner berupa nasi nyangku, Karangsalam yang juga punya wisata air terjun telah masuk dalam 10 besar desa wisata nusantara.'
      />
      <Separator width={'85%'} />
      <EventItem
        thumbnailUri='http://13.250.44.36:8002/bumdes/9.jpg'
        date='Senin, 01 Februari 2019'
        title='Laporan Kegiatan Usaha dan Keuangan BUMDes Artha Jaya Kesuma'
        description='Kegiatan Musyawarah Desa (Musdes)
        dipimpin langsung oleh Sugianto,HS selaku Komisaris Badan Usaha Milik Desa Artha Jaya Kesuma Desa Tanjung Kesuma Kecamatan Purbolinggo Kamis, 31/1 Jam 9:30 WIB di balai pertemuan Desa setempat. Musyawarah Desa diselenggarakan adalah dalam rangka penyampaian Laporan Kegiatan Usaha dan Keuangan Badan Usaha Milik Desa (BUMDes) Artha Jaya Kesuma, dimana Direktur dijabat oleh Suyatno dan Bendahara dijabat oleh Dadang Suryana.
        Hadir dalam acara penyampaian laporan tersebut, Sugianto, Sekretaris Desa, Tim Pendamping PPPMD, Suyatno, Dadang Suryana, Ketua BPD, Ketua LPMD, Perangkat Desa Tanjung Kesuma dan jajarannya.
        Komisaris BUMDes Artha Jaya Kesuma Desa Tanjung Kesuma Kecamatan Purbolinggo, Sugianto telah secara berkesinambungan melakukan pemantauan atas perkembangan BUMDes tersebut.
        "Secara sistematis sebagai komisaris saya memantau perkembangan BUMDes Desa Tanjung Kesuma. Mulai pertama kali diberikan modal dari Dana Desa dan mekanismenya sudah kita ketahui bersama tahun ini kita belum melahirkan Perdes. Memang banyak sekali kendala -kendala yang dihadapi dan sikapi karena banyak sekali masalah - masalah yang  kita ketahui bersama ketika berbicara BUMDes sampai saat ini masih asa",kata Sugianto Komisaris BUMDes Artha Jaya Kesuma Desa Tanjung Kesuma Kamis, 31/1 jam 09:30 WIB diruang pertemuan kantor Desa setempat.'
      />
      <EventItem
        thumbnailUri='http://13.250.44.36:8002/bumdes/10.jpg'
        date='Senin, 08 November 2020'
        title='Tunjukkan Eksistensi BUMDES Lowano Adikarso Mulai Beroperasi'
        description='Badan Usaha Milik Desa (BUMDES) Lowano Adikarso memulai kegiatan usaha perdananya di Kompleks Pasar Loano pada Minggu pagi 08/11. Bazar sembako murah merupakan tajuk kegiatan yang dilaksanakan pagi-siang hari tersebut.
        BUMDES menyediakan aneka kebutuhan pokok mulai dari sembako dan aneka perlengkapan mandi dan cuci dengan harga yang relatif terjangkau. Sembako dijual per paket dengan harga Rp 45.000 sementara untuk paket perlengkapan mandi dan cuci dijual dengan harga Rp. 24.000. Selain dengan paket Bazar Sembako yang digelar BUMDES juga menyediakan produk-produk yang dijual per-item dengan harga grosir.
        Ke-depan BUMDES Lowano Adikarso berencana melebarkan sayap usahanya seperti kredit keuangan, PPOB dan juga jasa sewa. Diharapkan dengan adanya BUMDES ini dapat meningkatkan Pendapatan Asli Desa (PAD) Desa Loano'
      />
    </ScrollView>
  );
};

export default EventListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingVertical: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});
