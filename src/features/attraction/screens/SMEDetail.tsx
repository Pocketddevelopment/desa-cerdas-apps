import Button from '@components/Button';
import DeviceContants from '@constants/device';
import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Caption, Text, Title } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

const data: string[] = [
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
  'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
];

const SMEDetailScreen: React.FC = () => {
  const renderCarouselItem = ({ item, index }: any) => {
    return <Image source={{ uri: item }} style={styles.image} />;
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.bodyContainer}>
      <Carousel
        layout='default'
        data={data}
        renderItem={renderCarouselItem}
        layoutCardOffset={9}
        sliderWidth={DeviceContants.screenWidth}
        itemWidth={DeviceContants.screenWidth}
        contentContainerStyle={{ flexGrow: 0 }}
        snapToAlignment={'center'}
      />
      <View style={styles.contentContainer}>
        <Button mode='outlined' primary>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png',
            }}
            style={styles.icon}
          />{' '}
          Hubungi via Whatsapp
        </Button>
        <View style={styles.section}>
          <Title style={styles.title}>Deskripsi</Title>
          <Text>
            Kulit lumpia cocok untuk dijadikan lumpia atau digoreng saja menjadi
            camilan pangsit goreng. Satu plastik isi 500 lembar.
          </Text>
        </View>
        <View style={styles.section}>
          <Title style={styles.title}>Info Penjual</Title>
          <Text>H. Slamet Barokah 08123456789</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SMEDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
    flex: 1,
  },
  pagination: {
    marginTop: 10,
  },
  paginationDot: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    opacity: 1,
    width: 20,
    height: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
  image: {
    flex: 1,
    height: 10,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    marginVertical: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: undefined,
  },
});
