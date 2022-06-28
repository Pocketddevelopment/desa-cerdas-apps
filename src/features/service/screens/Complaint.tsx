import Container from '@components/Container';
import Separator from '@components/Separator';
import SectionTitle from '@components/typography/SectionTitle';
import ComplaintCard from '@service/components/ComplaintCard';
import ComplaintItem from '@service/components/ComplaintItem';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const ComplaintScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Container>
        <View style={{ paddingHorizontal: 20 }}>
          <ComplaintCard />
        </View>

        <View style={styles.complaintSection}>
          <SectionTitle>Keluhan Warga</SectionTitle>
          <ComplaintItem
            date='2 Maret 2021 | 13:59'
            thumbnailUri='https://akcdn.detik.net.id/community/media/visual/2021/03/02/jalan-lubang-di-sidoarjo-1_43.jpeg?w=700&q=90'
            title='Dear Bupati, Jalan Rusak dan Berlubang Masih Banyak Bertebaran di Sidoarjo'
            description='Jalan rusak dan berlubang di Sidoarjo ternyata masih banyak. Yang menderita dan terganggu tentu saja adalah para pengguna jalan. Ini keluhan mereka
            Kerusakan parah yang terlihat di Jalan Bhayangkari di Kecamatan Porong. Jalan penghubung antara Porong ke Krembung itu banyak yang berlubang. Lubang jalan mulai dari pertigan Kelurahan Juwet hingga traffic light di Jalan Arteri
            Dengan panjang jalan tak lebih dari 2 kilometer, terdapat puluhan lubang jalan dengan lebar 1 meter, panjang 1,5 meter dan dengan kedalaman satu jengkal orang dewasa. Apabila ada pengendara roda dua melintas dengan kecepatan agak tinggi, dipastikan jatuh.'
            count={5}
          />
          <Separator />
          <ComplaintItem
            date='24 Juni 2020 | 10:33'
            thumbnailUri='https://img.inews.co.id/media/822/files/inews_new/2020/06/24/sampah_di_sungai.jpg'
            title='Warga Buang Sampah Sembarangan, Bau Busuk Tercium dari Muara Sungai di Pasuruan'
            description='Salah satu warga, Jufri, sampah-sampah ini berasal dari warga di lima desa yang berada di sepanjang aliran sungai. Desa-desa ini antara lain Branang, Tampung, Jatiarjo dan Balonganyar serta Tambak Lekok. Sampah-sampah ini kiriman dari desa di atasnya. Pas musim hujan, bukan cuma sampah seperti ini yang datang, tapi sudah kotoran sapi hingga kayu-kayu ukuran besar, katanya. Menurutnya, kurangnya fasilitas tempat pembungan sampah dan kesadaran kebersihan menjadikan warga terbiasa membuang sampah sembarangan.'
            count={0}
          />
          <Separator />
          <ComplaintItem
            date='14 Mei 2020 | 12:33'
            thumbnailUri='https://mediacenter.palangkaraya.go.id/wp-content/uploads/sites/24/2020/02/IMG-20200204-WA0022-660x330.jpg'
            title='Depo Tersedia, Tapi Masih Ada Warga Buang Sampah Sembarangan'
            description='Terkait masih adanya warga yang membuang sampah tidak pada tempatnya tersebut, maka tegas Toha dirinya kembali meminta ketua RT setempat untuk menegaskan warganya agar tidak membuang sampah pada jalur tersebut, melainkan langsung dibuang ke depo sampah yang tersedia. Sementara itu Lurah Menteng Kecamatan Jekan Raya Kota Palangka Raya, Rossalinda mengungkapkan, bila selama ini pihak kelurahan telah menyurati bahkan melakukan sosialisasi kepada setiap lingkungan RT agar warganya tidak lagi membuang sampah tidak pada tempatnya.'
            count={0}
          />
          <Separator />
          <ComplaintItem
            date='30 September 2017 | 12:57'
            thumbnailUri='https://akcdn.detik.net.id/community/media/visual/2017/09/30/d61e310b-a42e-4125-8078-dd2ef35352bf_169.jpg?w=700&q=90'
            title='Sampah Kiriman Berdampak Banjir di Kabupaten Bandung'
            description='Sampah kiriman dari Kota Bandung yang mengalir dari Sungai Cikapundung dan bermuara ke Sungai Citarum menumpuk di Jembatan Leuwi Bandung, Kecamatan Bojongsoang. Akibatnya, air yang ada di sungai tersebut meluap ke pemukiman warga dan merendam ratusan rumah yang berada di Kampung Lewi Bandung, Desa Cijagra, Kecamatan Bojong Soang.'
            count={0}
          />
          <Separator />
          <ComplaintItem
            date='07 April 2022 | 19:20'
            thumbnailUri='https://buletinindonesianews.com/wp-content/uploads/2022/04/20220407_123418-1.jpg'
            title='Warga Keluhkan Sisa Sisa Pohon Tumbang di Ciamis Belum di Bereskan'
            description='Salah seorang pengendara Nandang (38) yang melintas memaparkan kekesalannya “Menuju sore jalan ini suka ramai di lintasi apalagi sekarang bulan ramadhan banyak yang ngabuburit ke arah kota, kalau bisa cepat di bereskan agar kami warga tidak kesusahan mepet terus ke pinggir jalan apalagi kalau bawa anak susah “, paparnya “Harapannya sigap cepat apalagi sekarang musim nya hujan jalan ini jalan hidup banyak di lalui pengendara luar kota juga dan bis,” tambahnya'
            count={0}
          />
        </View>
      </Container>
    </ScrollView>
  );
};

export default ComplaintScreen;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 0 },
  complaintSection: {
    marginTop: 20,
    width: '100%',
  },
});
