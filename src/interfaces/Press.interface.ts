import { GestureResponderEvent } from 'react-native';

type onPressInterface = ((event: GestureResponderEvent) => void) &
  ((e: GestureResponderEvent) => void) &
  (() => void);

export default onPressInterface;
