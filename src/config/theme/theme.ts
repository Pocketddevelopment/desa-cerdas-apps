import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  configureFonts,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
};

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      caption: string;
      separator: string;
      success: string;
      'success-background': string;
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
    'success-background': '#DEF7E3',
    success: '#00850C',
  },
  // @ts-ignore
  fonts: configureFonts(fontConfig),
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
    'success-background': '#DEF7E3',
    success: '#00850C',
  },
  myOwnProperty: true,
};
