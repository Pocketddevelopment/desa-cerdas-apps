import React from 'react';
import Separator from '@components/Separator';
import SectionTitle from '@components/typography/SectionTitle';
import NewsItem from '@dashboard/components/NewsItem';
import { ScrollView, StyleSheet } from 'react-native';

const NewsList: React.FC = () => {
  return (
    <ScrollView style={styles.body}>
      <SectionTitle>Berita Terkini</SectionTitle>
      <NewsItem
        thumbnailUri='http://13.250.44.36:8002/berita-utama/1.jpg'
        date='Rabu, 15 Jun 2022'
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
    </ScrollView>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  body: {
    paddingTop: 10,
    paddingHorizontal: 25,
  },
});
