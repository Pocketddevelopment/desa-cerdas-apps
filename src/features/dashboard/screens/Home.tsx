import Row from '@components/Row';
import SpaceBetween from '@components/SpaceBetween';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, IconButton, Text, Title } from 'react-native-paper';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <SpaceBetween>
          <View>
            <Avatar.Image
              size={48}
              source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}
            />
            <View style={styles.profileDetail}>
              <Text>Selamat Datang,</Text>
              <Title>Bambang Sudrajat</Title>
            </View>
          </View>
          <IconButton
            icon='camera'
            color={'white'}
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </SpaceBetween>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    backgroundColor: 'red',
    padding: 20,
    paddingHorizontal: 40,
  },
  profileDetail: {
    marginLeft: 10,
  },
});
