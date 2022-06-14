import React from 'react';
import { View } from 'react-native';

type PaginationDotProps = {
  isActive: boolean;
};

const Dot = ({ isActive }: PaginationDotProps) => {
  return (
    <View
      style={{
        width: 12,
        height: 12,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
        marginHorizontal: 4,
        backgroundColor: isActive ? 'transparent' : 'white',
      }}
    />
  );
};

export default Dot;
