import { RootStackParamList } from '@@@/App';
import DeviceContants from '@constants/device';
import onPressInterface from '@interfaces/Press.interface';
import SelectItemInterface from '@interfaces/SelectItem.interface';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { ActivityIndicator, IconButton, useTheme } from 'react-native-paper';
import Row from './Row';
import { Text, Title } from './typography';

export type ModalSelectorScreenProps = {
  title: string;
  data: SelectItemInterface[];
  initialSelectedIndex: number;
  onSelectItem: any;
  onCloseModal?: onPressInterface;
  loading?: boolean;
};

const ModalSelectorScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'ModalSelector'>
> = ({ navigation, route }) => {
  const {
    title,
    data,
    initialSelectedIndex,
    onSelectItem,
    onCloseModal,
    loading,
  } = route.params;
  const theme = useTheme();

  const closeModal = () => {
    onCloseModal && onCloseModal();
    navigation.goBack();
  };

  const selectItem = (e: SelectItemInterface) => {
    onSelectItem(e);
    closeModal();
  };

  return (
    <Modal isVisible={true} style={{ margin: 0, borderTopEndRadius: 10 }}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Row style={styles.header}>
            <View style={{ flex: 9 }}>
              <Title size={16}>{title}</Title>
            </View>
            <View style={{ flex: 1 }}>
              <IconButton icon={'close'} onPress={closeModal} />
            </View>
          </Row>
          <ScrollView showsVerticalScrollIndicator={false}>
            {loading && <ActivityIndicator />}
            {data.map((e: SelectItemInterface, i: number) => {
              return (
                <TouchableOpacity
                  delayPressIn={80}
                  key={e.value}
                  onPress={() => selectItem(e)}>
                  <Row style={styles.selectItem}>
                    <IconButton
                      color={theme.colors.primary}
                      icon={
                        initialSelectedIndex === i
                          ? 'check-circle'
                          : 'circle-outline'
                      }
                      style={styles.selectionIcon}
                    />
                    <Text>{e.label}</Text>
                  </Row>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <View style={styles.modal} />
    </Modal>
  );
};

export default ModalSelectorScreen;

const styles = StyleSheet.create({
  selectItem: {
    padding: 15,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  modal: {
    backgroundColor: 'white',
    width: '100%',
    maxHeight: DeviceContants.screenHeight / 3,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  header: {
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  selectionIcon: { margin: 0, marginRight: 10, height: 25 },
});
