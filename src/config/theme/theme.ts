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
      // myOwnColor: string;
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
  },
  myOwnProperty: true,
};
