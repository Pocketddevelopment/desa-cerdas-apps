import Row from '@components/Row';
import Separator from '@components/Separator';
import SpaceBetween from '@components/SpaceBetween';
import { Text, Title } from '@components/typography';
import SectionTitle from '@components/typography/SectionTitle';
import DeviceContants from '@constants/device';
import DistrictCard from '@dashboard/components/DistrictCard';
import NewsItem from '@dashboard/components/NewsItem';
import WeatherCard from '@dashboard/components/WeatherCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, IconButton, useTheme } from 'react-native-paper';
import { DashboardStackParamList } from '..';

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.profileContainer,
          { backgroundColor: theme.colors.primary },
        ]}>
        <SpaceBetween>
          <Row>
            <Avatar.Text
              size={48}
              label='B'
              color={theme.colors.text}
              labelStyle={{ fontWeight: '700', fontSize: 20 }}
              style={{ backgroundColor: '#FFEBEB' }}
            />
            <View style={styles.profileDetail}>
              <Text color={theme.colors.background}>Selamat Datang,</Text>
              <Title color={theme.colors.background} style={styles.name}>
                Bambang Sudrajat
              </Title>
            </View>
          </Row>
          <IconButton
            icon={require('@assets/notification/bell.webp')}
            color={'white'}
            size={30}
            onPress={() => navigation.navigate('NotificationList')}
          />
        </SpaceBetween>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollBody}
        showsVerticalScrollIndicator={false}>
        <View style={styles.districtCardContainer}>
          <View
            style={[
              styles.upperAbsolute,
              { backgroundColor: theme.colors.primary },
            ]}
          />
          <DistrictCard />
        </View>
        <WeatherCard />
        <View style={styles.body}>
          <SectionTitle>Berita Terkini</SectionTitle>
          <NewsItem
            thumbnailUri='https://cdn0-production-images-kly.akamaized.net/ziM87-DAY4HxpGxNQMUn1q47sxk=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4053640/original/044577000_1655279811-IMG-20220615-WA0064.jpg'
            date='15 Jun 2022, 18:45 WIB'
            title='Ini Isi Pertemuan Para Ketua Umum Partai Koalisi Sebelum Reshuffle Kabinet'
            description='Agenda makan siang dengan ketua umum partai politik (parpol) koalisi pendukung pemerintah bersama Presiden Joko Widodo sebelum reshuffle kabinet menjadi tanda tanya besar. Lantas apa perbincangan yang dibahas di ruang makan Presidential Lounge?

            Menjawab pertanyaan itu, Ketua Umum Partai NasDem Surya Paloh menjelaskan jika pembahasan tersebut mengulas soal prediksi Bank Dunia atau World Bank dan Dana Moneter Internasional atau International Monetary Fund (IMF) soal negara terancam menjadi negara gagal.

            Gak ada pembahasan yang terlalu serius tadi. jadi memang satu hal yang saya pikir merupakan catatan serius adalah mengenai apa yang dipahami oleh IMF dan World Bank, katanya

            Menurutnya, prediksi dari World Bank dan IMF telah menjadi catatan serius dari pemerintah yang disampaikan Presiden Jokowi karena sebanyak 60 negara telah memiliki indikasi potensi menjadi negara failed state atau negara yang gagal.

            Karena efek daripada pandemi, yang menimbulkan krisis pangan, dan multi krisis yang terjadi di negara-negara tersebut, katanya.

            Meski tidak disebutkan negara mana saja yang masuk dalam daftar World Bank dan IMF, namun kata Paloh, Indonesia telah mendapat peringatan meski tidak masuk dalam deretan negara gagal tersebut.

            Dari berita yang terakhir kurang lebih, kurang dari dua minggu yang mengingatkan indonesia. Tapi kita bersyukur, Indonesia tidak masuk dalam daftar dari negara yang terancam seperti itu, tuturnya.'
          />
          <Separator width={'90%'} />
          <NewsItem
            thumbnailUri='https://cdn1-production-images-kly.akamaized.net/Kfn4ST5n759ghdSk6Myj6iGZ_Qw=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2838157/original/078231200_1653616364-58423621_185452302442672_1172999920324638983_n.jpg'
            date='15 Jun 2022, 17:57 WIB'
            title='Ridwan Kamil Berterimakasih pada Media Beritakan Eril dengan Adil'
            description='Gubernur Jawa Barat Ridwan Kamil memberikan perhatian khusus terhadap pemberitaan seputar meninggalnya Emeril Kahn Mumtadz alias Eril. Pria yang kerap disapa Kang Emil itu pun berterimakasih kepada media yang memberitakan anaknya sesuai kaidah jurnalistik.

          Pernyataan itu disampaikan Ridwan Kamil saat menerima kunjungan pengurus Forum Pemimpin Redaksi Indonesia (Forum Pemred).

          Media mainstream telah adil memberitakan Eril. Saya sangat berterima kasih, ujar Emil di Gedung Pakuan, Bandung, Rabu (15/6/2022).

          Emil mengaku menyesali munculnya berita-berita yang menonjolkan paranormal dalam pemberitaan Eril. Dia juga mengaku tidak berani melihat akun-akun media sosial yang menyebarkan informasi-informasi hoaks soal Eril.'
          />
          <Separator width={'90%'} />
          <NewsItem
            thumbnailUri='https://cdn1-production-images-kly.akamaized.net/QNAUqFGaPpGj299TDfNmr2hbrMI=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3901845/original/078821800_1641994795-20220112-Waspada-Omicron-1.jpg'
            date='15 Jun 2022, 17:30 WIB'
            title='Terdeteksi 20 Kasus Subvarian Omicron BA.4 dan BA.5 di RI'
            description='Hingga Selasa, 14 Juni 2022 jumlah kasus baru BA.4 dan BA.5 tercatat sebanyak 20 kasus. Angka subvarian Omicron ini disampaikan oleh Juru Bicara Kementerian Kesehatan (Kemenkes) RI Mohammad Syahril.

          Sampai hari ini, ada 20 subvarian Omicron yang terdiri atas dua kasus BA.4 dan 18 kasus BA.5, kata Mohammad Syahril yang dikonfirmasi melalui pesan singkat di Jakarta, Selasa siang (14/6/2022) mengutip Antara.

          Dengan demikian, laju kasus subvarian Omicron tersebut bertambah 12 kasus dari laporan sebelumnya yang berjumlah delapan kasus.

          BA.4 dan BA.5 di Indonesia bermula dari laporan empat kasus di Bali pada 6 Juni 2022 dan bertambah empat kasus lagi di Jakarta dalam beberapa hari kemudian.

          Sejak terdeteksi, subvarian ini telah menarik perhatian para ahli, salah satunya ahli epidemiologi Dicky Budiman. Ia pun menerangkan terkait karakteristik dari BA.4 dan BA.5.

          Menurutnya, subvarian ini memiliki karakter yang lebih efektif lantaran terdiri dari kombinasi kecepatan menginfeksi Omicron dan kemampuan mengikat sel dari Delta.

          BA.4 dan BA.5 adalah subvarian Omicron, lanjutnya, jadi masih bagian dari Omicron walaupun karakternya sudah sangat berbeda dari BA.1 dan BA.2.

          “BA.4 atau khususnya BA.5 ini dia memiliki karakter yang merupakan kombinasi antara kecepatan menginfeksi yang dia warisi dari Omicron leluhurnya.”'
          />
          <Separator width={'90%'} />
          <NewsItem
            thumbnailUri='https://cdn0-production-images-kly.akamaized.net/O0VsqMnKwEgDxIqGq_JSdJx2o34=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4053793/original/006195300_1655284948-Presiden_Jokowi_Resmi_Lantik_Zulkifli_Hasan_Jadi_Mendag_dan_Hadi_Tjahjanto_Menteri_ATR_BPN-AP-5.jpg'
            date='15 Jun 2022, 17:24 WIB'
            title='Gerindra Sambut Baik Zulkifli Hasan Masuk Kabinet'
            description='Ketua Umum Partai Amanat Nasional (PAN) Zulkifli Hasan baru saja dilantik sebagai Menteri Perdagangan oleh Presiden Jokowi. Menanggapi hal tersebut, Partai Gerindra menyatakan tak mempermasalahkan masuknya PAN di kabinet.

          Wakil Ketua Umum Gerindra, Habiburokhman menyebut hubungan Gerindra dengan PAN sangat baik, sehingga tidak perlu ada yang perlu dipermasalahkan.

          Kami enggak ada masalah, kami dan PAN punya hubungan yang baik. Pak Zulkifli kalau beliau masuk kabinet juga sosok yang punya hubungan baik dengan pimpinan kami Partai Gerindra, kata Habiburokhman di Kompleks Parlemen Senayan, Rabu (15/6/2022).

          Habiburokhman menilai Zulhas akan mampu berdapatasi dengan cepat, mengingat Zulhas sudah satu frekuensi dengan para menteri di kabinet.

          Saya pikir frekuensinya enggak akan sulit, beliau (Zulhas) juga saya pikir tidak akan sulit mencari frekuensi yang sama untuk terus memaksimalkan kerja di posisi di mana beliau ditunjuk. Karena kan ini waktu kabinet enggak terlalu lama lagi, jadi enggak akan banyak penyesuaian, kata dia.'
          />
          <Separator width={'90%'} />
          <NewsItem
            thumbnailUri='https://cdn0-production-images-kly.akamaized.net/Okjul-26ApigIa1TFMGxmMnWBAw=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2950021/original/028640200_1572013911-JWW_KabarPapua.jpeg'
            date='15 Jun 2022, 19:02 WIB'
            title='Profil Singkat John Wempi Wetipo, Putra Papua yang Ditunjuk Jokowi Jadi Wamendagri'
            description='John Wempi Wetipo baru saja dilantik Presiden Joko Widodo atau Jokowi sebagai Wakil Menteri Dalam Negeri (Wamendagri) pada hari ini, Rabu (15/6/2022) di Istana Negara Jakarta.

          Dengan dilantiknya John Wempi Wetipo, maka ia nantinya akan bekerja dengan Menteri Dalam Negeri (Mendagri) Tito Karnavian.

          Adapun pelantikan ini berdasarkan Keputusan Presiden Nomor 24/M Tahun 2022 tentang pemberhentian dan pengangkatan menteri negara Kabinet Indonesia Maju periode tahun 2019-2024.

          Lantas, siapakah sebenarnya sosok John Wempi Wetipo?

          Sebelum menjabat sebagai Wamendagri, John Wempi Wetipo merupakan Wakil Menteri Pekerjaan Umum dan Perumahan Rakyat (Wamen PUPR) mulai 25 Oktober 2019 hingga 15 Juni 2022.

          Melansir Wikipedia, John Wempi Wetipo pernah menjabat Bupati Jayawijaya, Papua selama dua periode yakni 2008-2013 dan 2013–2018.

          Saat menjabat sebagai Bupati Jayawijaya, John Wempi Wetipo pernah mendapat penghargaan, antara lain dari Komisi Pemberantasan Korupsi (KPK).

          Penghargaan dari KPK itu terkait manajemen keuangan yang diterapkan Wempi di Kabupaten Jayawijaya. Itulah yang menghantarkannya kembali menjadi Bupati Jayawijaya periode 2013–2018.

          Pada Pemilihan Gubernur (Pilgub) Papua 2018, ia ikut serta sebagai Calon Gubernur Papua menghadapi petahana Lukas Enembe. Namun sayangnya, John Wempi Wetipo tak terpilih.

          John Wempi Wetipo lahir pada 15 September 1972 di Jayawijaya, Papua. Ia menyelesaikan pendidikan SD YPPGI Hitigima, Wamena oada 1985.

          Lalu SMP Negeri 2 Wamena pada 1988 dan SMA YPPK Taruna Dharma Jayapura pada 1991. Wempi meraih gelar Sarjana Hukum pada 2011 dan Magister Hukum pada 2013 dari Universitas Cenderawasih, Papua.'
          />
          <Separator width={'90%'} />
          <NewsItem
            thumbnailUri='https://cdn0-production-images-kly.akamaized.net/G7GXJVhN_lU03ADH3DtintKrZMU=/0x783:1777x1784/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3010932/original/076920300_1577941018-agnez_2.jpg'
            date='15 Jun 2022, 19:02 WIB'
            title='Agnez Mo Sebut Bali Jauh Lebih Indah Dibanding Hawaii'
            description='Keindahan Bali tak hanya diakui orang Indonesia, tapi juga banyak wisatawan mancanegara. Penyanyi Agnez Mo yang sudah sering ke luar negeri pun juga mengakui keindahan Pulau Dewata.

            Agnez Mo menyebut Bali sebagai tempat menakjubkan dan punya pemandangan yang cantik. Ia bahkan mengatakan bahwa tidak ada yang bisa menandingi Bali di Instagram Live di akun miliknya pada 13 Juni 2022.

            Dalam video berdurasi 10 menit tersebut, Agnez menjelaskan dirinya sedang berada di Bali dan ia menyukai suasana dari vila yang ia tempati. Seriously, nothing beats, nothing beats Bali (Serius nih, tidak ada tandingnya, tidak ada yang menandingi Bali) ucap Agnez.

            Penyanyi berusia 35 tahun ini mengatakan, saat itu cuaca di Bali mendung. Namun menurutnya suasana di sana tetap cantik dan tidak berubah sama sekali.

            I mean its pretty gloomy, its not really pretty as usual but you know how Bali is, Bali is amazing (Saat ini sedang mendung, pemandangannya tidak secantik biasanya, tapi kamu tahu Bali, Bali itu selalu luar biasa), kata Agnez.

            Agnez mengatakan, ia belum pernah ke Hawaii, tapi ia sering mendapatkan cerita dari teman-temannya yang sudah pernah berkunjung ke Hawaii dan Bali. Pelantun lagu Tak Ada Logika ini menuturkan, teman-temannya mengatakan bahwa Bali jauh lebih indah dibanding Hawaii yang juga dikenal dengan beragam pantainya yang menawan.'
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 64,
  },
  profileContainer: {
    padding: 20,
    paddingHorizontal: 30,
    paddingRight: 20,
  },
  profileDetail: {
    marginLeft: 10,
  },
  scrollBody: {
    flexGrow: 1,
  },
  body: {
    paddingTop: 10,
    paddingHorizontal: 25,
  },
  upperAbsolute: {
    height: 40,
    width: DeviceContants.screenWidth,
  },
  name: { letterSpacing: 0.5 },
  districtCardContainer: {
    height: 200,
    alignItems: 'center',
  },
});
