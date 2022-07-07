import { GestureResponderEvent } from 'react-native';

type onPressInterface = ((event: GestureResponderEvent) => void) &
  ((e: GestureResponderEvent) => void) &
  ((params: any) => void) &
  (() => void);

export default onPressInterface;
