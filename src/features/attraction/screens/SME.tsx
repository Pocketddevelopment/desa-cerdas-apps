import SMECard from '@attraction/components/SMECard';
import React from 'react';
import SpaceBetween from '@components/SpaceBetween';
import { ScrollView, StyleSheet, View } from 'react-native';
import Row from '@components/Row';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DashboardStackParamList } from '@dashboard/index';
import { useNavigation } from '@react-navigation/native';

const SMEScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParamList>>();

  const onPressSME = () => {
    navigation.navigate('SMEDetail');
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, padding: 10, paddingTop: 20 }}
      showsVerticalScrollIndicator={false}>
      <Row>
        <View style={{ flex: 1 }}>
          <SMECard
            thumbnailUri='https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000'
            name='Kulit Lumpia Barokah'
            phone='0813456789'
            seller='H. Slamet Barokah'
            onPress={onPressSME}
          />
        </View>
        <View style={{ flex: 1 }}>
          <SMECard
            thumbnailUri='https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000'
            name='Kulit Lumpia Barokah'
            phone='0813456789'
            seller='H. Slamet Barokah'
            onPress={onPressSME}
          />
        </View>
      </Row>
      <Row>
        <View style={{ flex: 1 }}>
          <SMECard
            thumbnailUri='https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000'
            name='Kulit Lumpia Barokah'
            phone='0813456789'
            seller='H. Slamet Barokah'
            onPress={onPressSME}
          />
        </View>
        <View style={{ flex: 1 }}>
          <SMECard
            thumbnailUri='https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000'
            name='Kulit Lumpia Barokah'
            phone='0813456789'
            seller='H. Slamet Barokah'
            onPress={onPressSME}
          />
        </View>
      </Row>
      <Row>
        <View style={{ flex: 1 }}>
          <SMECard
            thumbnailUri='https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000'
            name='Kulit Lumpia Barokah'
            phone='0813456789'
            seller='H. Slamet Barokah'
            onPress={onPressSME}
          />
        </View>
        <View style={{ flex: 1 }}>
          <SMECard
            thumbnailUri='https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000'
            name='Kulit Lumpia Barokah'
            phone='0813456789'
            seller='H. Slamet Barokah'
            onPress={onPressSME}
          />
        </View>
      </Row>
    </ScrollView>
  );
};

export default SMEScreen;

const styles = StyleSheet.create({});
