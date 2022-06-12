import Container from '@components/Container';
import Separator from '@components/Separator';
import ComplaintCard from '@service/components/ComplaintCard';
import ComplaintItem from '@service/components/ComplaintItem';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const ComplaintScreen: React.FC = () => {
  return (
    <Container style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <ComplaintCard />
      </View>

      <View style={styles.complaintSection}>
        <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
          Keluhan Warga
        </Text>
        <ComplaintItem
          date='12 Maret 2022 | 17.02'
          thumbnailUri='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg'
          title='Himbauan vaksinasi booster dalam'
          description='Perjuangan pemutusan rantai penularan Caahahahahah'
          count={0}
        />
        <Separator />
        <ComplaintItem
          date='12 Maret 2022 | 17.02'
          thumbnailUri='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg'
          title='Himbauan vaksinasi booster dalam'
          description='Perjuangan pemutusan rantai penularan Caahahahahah'
          count={0}
        />
        <Separator />
      </View>
    </Container>
  );
};

export default ComplaintScreen;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 0 },
  complaintSection: {
    marginTop: 30,
    width: '100%',
  },
});
