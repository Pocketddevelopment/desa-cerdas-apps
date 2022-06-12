import SMECard from '@attraction/components/SMECard';
import React from 'react';
import SpaceBetween from '@components/SpaceBetween';
import { ScrollView, StyleSheet, View } from 'react-native';
import Row from '@components/Row';

const SMEScreen: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, padding: 10, paddingTop: 20 }}
      showsVerticalScrollIndicator={false}>
      <Row>
        <View style={{ flex: 1 }}>
          <SMECard />
        </View>
        <View style={{ flex: 1 }}>
          <SMECard />
        </View>
      </Row>
      <Row>
        <View style={{ flex: 1 }}>
          <SMECard />
        </View>
        <View style={{ flex: 1 }}>
          <SMECard />
        </View>
      </Row>
      <Row>
        <View style={{ flex: 1 }}>
          <SMECard />
        </View>
        <View style={{ flex: 1 }}>
          <SMECard />
        </View>
      </Row>
      <Row>
        <View style={{ flex: 1 }}>
          <SMECard />
        </View>
        <View style={{ flex: 1 }}>
          <SMECard />
        </View>
      </Row>
    </ScrollView>
  );
};

export default SMEScreen;

const styles = StyleSheet.create({});
