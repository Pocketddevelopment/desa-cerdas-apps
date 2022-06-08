import React from 'react';
import { TextInput } from 'react-native-paper';
import type { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

export default function Input(props: Partial<TextInputProps>) {
  return <TextInput label='InputLabel' style={{ maxHeight: 60 }} {...props} />;
}
