import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      caption: string;
      separator: string;
    }

    interface Theme {
      myOwnProperty: boolean;
    }
  }
}

const newPaperDefaultTheme = {
  ...PaperDefaultTheme,
  myOwnProperty: true,
};

const newPaperDarkTheme = {
  ...PaperDarkTheme,
  myOwnProperty: true,
};

export const CombinedDefaultTheme = {
  ...newPaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#D0342C',
    accent: '#F28418',
    background: '#FFFFFF',
    caption: '#95989A',
    separator: '#E3E3E3',
  },
  myOwnProperty: true,
};

export const CombinedDarkTheme = {
  ...newPaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#D0342C',
    accent: '#F28418',
    background: '#000000',
    caption: '#95989A',
    separator: '#E3E3E3',
  },
  myOwnProperty: true,
};
