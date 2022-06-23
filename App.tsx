import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
  PreferencesContext,
} from '@config/theme';
import DashboardStack from '@dashboard/index';
import { NavigationContainer } from '@react-navigation/native';
import React, { createContext, useMemo, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthenticationStack from './src/features/authentication';

export const AuthContext = createContext({});

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  const authContext = useMemo(
    () => ({
      logIn: async (_: any) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        setLoggedIn(true);
      },
      logOut: () => {
        setLoggedIn(false);
      },
      register: async (_: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  //@ts-ignore
  return (
    <PreferencesContext.Provider value={preferences}>
      <AuthContext.Provider value={authContext}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            {isLoggedIn ? DashboardStack() : AuthenticationStack()}
          </NavigationContainer>
        </PaperProvider>
      </AuthContext.Provider>
    </PreferencesContext.Provider>
  );
};

export default App;
