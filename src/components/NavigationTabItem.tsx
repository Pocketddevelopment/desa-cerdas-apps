import onPressInterface from '@interfaces/Press.interface';
import React from 'react';
import { Image, ImageSourcePropType, Pressable, View } from 'react-native';
import { Text } from './typography';

type NavigationTabItemProps = {
  label: string;
  isActive: boolean;
  onPress: onPressInterface;
  icon: ImageSourcePropType;
  color: string;
  inactiveColor: string;
};

function NavigationTabItem({
  label,
  icon,
  isActive,
  color,
  inactiveColor,
  onPress,
}: NavigationTabItemProps) {
  return (
    <View style={{ flex: 1, paddingVertical: 10 }}>
      <Pressable onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            padding: 15,
            paddingVertical: 10,
            marginHorizontal: 40,
            backgroundColor: isActive ? '#FFEBEB' : 'transparent',
            borderRadius: 20,
          }}>
          <Image
            source={icon}
            style={{
              height: 20,
              width: 20,
              tintColor: isActive ? color : inactiveColor,
              marginRight: 5,
            }}
          />
          {isActive && <Text color={color}>{label}</Text>}
        </View>
      </Pressable>
    </View>
  );
}

export default NavigationTabItem;
