import React from 'react';
import { View } from 'react-native';

type PaginationDotProps = {
  size: number;
  color: string;
};

const Dot = ({ size, color }: Partial<PaginationDotProps>) => {
  return (
    <View
      style={{
        width: size ? size : 10,
        height: size ? size : 10,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
        marginHorizontal: 4,
        backgroundColor: color ? color : 'white',
      }}
    />
  );
};

export default Dot;
